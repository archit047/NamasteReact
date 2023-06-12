import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/userContext";
const RestaurantCard = (props) => {
  const {Users} = useContext(UserContext);
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = resData?.data?.data;
  const {user} = props
  
  return (
    <div className="w-56 p-2 m-5 shadow-lg bg-pink-50" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        alt="res-logo"
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold text-xl">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo / 100} FOR TWO</h4>
      <h4>{deliveryTime} minutes</h4>
      <h4>{user?.name}</h4>
      <h5 className="font-bold">{Users?.name}-{Users?.email}</h5>
    </div>
  );
};

export default RestaurantCard;
