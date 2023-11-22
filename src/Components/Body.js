import React from "react";
import Restaurantcard from "./Restaurantcard.js";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer.js";
const Body = () => {
  const [listOfRes, setlistOfRes] = useState(null);
  const [filteredRes, setFilteredres] = useState([]);
  const [SearchText, setSearchText] = useState("");

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8173140631177&lng=80.91671459376812&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    console.log(json);
    setlistOfRes(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredres(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return listOfRes === null ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            setFilteredres(listOfRes.filter((res) => res.info.avgRating > 4));
          }}
        >
          Top rated Restaurant
        </button>
        <div className="search">
          <input
            type="text"
            className="search-box"
            placeholder="search your Restaurants"
            value={SearchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="searchBtn"
            onClick={() => {
              setFilteredres(
                listOfRes.filter((filRes) =>
                  filRes.info.name
                    .toLowerCase()
                    .includes(SearchText.toLowerCase())
                )
              );
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="res-container">
        {filteredRes.map((Restaurant) => (
          <Restaurantcard key={Restaurant.info.id} resdata={Restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
