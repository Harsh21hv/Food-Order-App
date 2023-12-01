import React from "react";
import { CDN_URL } from "../utils/constants";

const Restaurantcard = ({ resdata }) => {
  const { cloudinaryImageId, name, cuisines, costForTwo, avgRating } =
    resdata?.info; //Option chaining

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img 
        alt="res-logo"
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />  
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{resdata.info.sla.deliveryTime} minutes</h4>
    </div>
  );
};

export default Restaurantcard;
