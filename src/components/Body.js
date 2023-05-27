import RestaurantCard from "../components/RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "../components/Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";

const Body = () => {
  // local State Variable - super powerful variable
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  // empty dependency array => once after render
  // dependency array is [searchText] => once after initial render + everytime render (My search text changes)

  useEffect(() => {
    //API calls
    getRestaurants();
  }, []);

  async function getRestaurants() {
    let data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5773608&lng=77.0815155&offset=127&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING"
    );
    const json = await data.json();
    setListOfRestaurants(json.data.cards);
    setAllRestaurants(json.data.cards);
  }
  console.log("render");

  const isOnline = useOnline();

  if (!isOnline) {
    return <h1>Please check your internet connection...</h1>;
  }
  // Conditional Rendering
  // if restaurant is empty => shimmer UI
  // if restaurant has data => actual data UI

  // not render components (early returns)
  if (!allRestaurants) return null;

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setListOfRestaurants(data);
          }}
        >
          Search
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (list) => list.data.data.avgRating > 4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {/* You have to write logic for no restaurant found here */}
        {listOfRestaurants.map((restaurant) => (
          <Link
            to={"/restaurant/" + restaurant?.data?.data.id}
            key={restaurant?.data?.data.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
