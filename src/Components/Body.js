import React from "react";
import Restaurantcard from "./Restaurantcard.js";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer.js";
import { Link } from "react-router-dom";
import { resList_URL } from "../utils/constants.js";
import HomepageSkeleton from "../lib/Skeleton/HomepageSkeleton.js";
const Body = () => {
  const [listOfRes, setlistOfRes] = useState(null);
  const [filteredRes, setFilteredres] = useState([]);
  const [SearchText, setSearchText] = useState("");

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await fetch(resList_URL);
    const json = await data.json();

    console.log(json);
    if (
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    ) {
      setFilteredres(
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    }
    setlistOfRes(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return listOfRes !== null ? (
    <HomepageSkeleton/>
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
          <Link className="resCard"
            to={"/Restaurant/" + Restaurant.info.id}
            key={Restaurant.info.id}
          >
            <Restaurantcard resdata={Restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
