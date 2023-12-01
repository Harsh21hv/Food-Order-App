import React from "react";

import { useParams } from "react-router-dom";
import useResMenu from "../utils/useResMenu";
import HomepageSkeleton from "../lib/Skeleton/HomepageSkeleton";

const Restaurantmenu = () => {
  const { id } = useParams();

  const resInfo = useResMenu(id);

  if (resInfo === null) return <HomepageSkeleton/>;

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
        {itemCards &&
          itemCards.map((items) => (
            <li key={items.card.info.id}>
              {items.card.info.name}- Rs{" "}
              {items.card.info.price / 100 ||
                items.card.info.defaultPrice / 100}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Restaurantmenu;
