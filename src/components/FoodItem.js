import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/userContext";
const FoodItem = (props) => {
  const { resDatas } = props;
  const {
    name,
    price,
    category
  } = resDatas;
  console.log(resData);
  
  return (
    <div className="w-56 p-2 m-5 shadow-lg bg-pink-50" style={{ backgroundColor: "#f0f0f0" }}>
      <h3 className="font-bold text-xl">{name}</h3>
      <h4>Rupees: {price/100}</h4>
      <h5>Category: {category}</h5>
    </div>
  );
};

export default FoodItem;
