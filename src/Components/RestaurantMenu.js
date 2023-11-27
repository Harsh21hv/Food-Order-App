import React from "react";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const Restaurantmenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(MENU_API + id);

    const json = await data.json();

    console.log(json);

    setResInfo(json.data);
  };
  if (resInfo === null) return <Shimmer />;

  console.log(resInfo);

  const { name, costForTwo } = resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  console.log(itemCards);
  return (
    <div>
      <h1>{name} </h1>
      <h2>{costForTwo / 100} for Two</h2>
      <h2>Menu</h2>
      <ul>
        { itemCards.map((items) => (
          <li key={items.card.info.id}>
            {items.card.info.name}- Rs{" "}
            {items.card.info.price / 100 || items.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Restaurantmenu;
