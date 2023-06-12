import RestaurantCard from "../components/RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "../components/Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/userContext";

const Body = () => {
  // local State Variable - super powerful variable
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const {user,setUser} = useContext(UserContext);

  // empty dependency array => once after render
  // dependency array is [searchText] => once after initial render + everytime render (My search text changes)

  useEffect(() => {
    //API calls
    getRestaurants();
    console.log("useEffect");
  }, []);

  async function getRestaurants() {
    let data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5773608&lng=77.0815155&offset=127&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING"
    );
    const json = await data.json();
    console.log(json.data.cards);
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
      <div className="p-5 bg-pink-50 my-5">
        <input
          type="text"
          className="focus:bg-green-100 p-2 m-2"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
        style={{
          backgroundColor:"none",
        }}
          className="p-2 m-5 bg-purple-900 hover:bg-violet-600 text-white rounded-md"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setListOfRestaurants(data);
          }}
        >
          Search
        </button>
        <input value={user.name} onChange={
          e=>setUser({
            ...user,
            name:e.target.value,

          })
        }>
        </input>
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
      <div className="flex flex-wrap">
        {/* You have to write logic for no restaurant found here */}
        {listOfRestaurants.map((restaurant) => (
          <Link
            to={"/restaurant/" + restaurant?.data?.data.id}
            key={restaurant?.data?.data.id}
          >
            <RestaurantCard resData={restaurant} user={user} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
