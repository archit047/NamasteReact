import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
  const params = useParams();
  const { id } = params;

  const restaurant = useRestaurant(id);

  const [restaurantss, setRestaurantss] = useState({});
  const [restaurantsList, setRestaurantsList] = useState([]);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  //   async function getRestaurantInfo(){
  //    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5773608&lng=77.0815155&offset=127&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING");
  //    const json = await data.json
  //    console.log(json);
  //    setRestaurantss(json.data);
  //   }

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5773608&lng=77.0815155&restaurantId="+id
    );
    const json = await data.json();

    // console.log(
    //   json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
    //     .itemCards
    // );

    setRestaurantss(json.data?.cards[0]?.card?.card?.info);
    console.log(json.data?.cards[0]?.card?.card?.info);
    setRestaurantsList(
      json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
        ?.itemCards
    );
  }

  return(!restaurantss)?<Shimmer/>: (
    <div className="menu">
      <div>
        <h1>Restaurant id: {id}</h1>
        <h2>{restaurantss.name}</h2>
        <img src={CDN_URL + restaurantss.cloudinaryImageId} />
        <h3>{restaurantss.area}</h3>
        <h3>{restaurantss.city}</h3>
        <h3>{restaurantss.avgRating} stars</h3>
        <h3>{restaurantss.costForTwoMessage}</h3>
      </div>
      <div>
        <h1>Menu</h1>
        <ul>
          {restaurantsList.map((res) => (
            <li key={res?.card?.info?.id}>{res?.card?.info?.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
