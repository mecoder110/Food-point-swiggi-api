import { useEffect, useState } from "react";
import RestroCard from "./RestroCard";
import Shimmer from "./Shimmer";

function filterData(searchInput, restaruants) {
  const data = restaruants.filter((rest) => {
    return rest?.info?.name?.toLowerCase().includes(searchInput.toLowerCase());
  });
  return data;
}

const Body = () => {
  const [actualRestaurant, setActualRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchInput, setSearchInput] = useState("KFC");

  useEffect(() => {
    callSweggi();
  }, []);

  async function callSweggi() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.87560&lng=80.91150&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log("calling api");
    setActualRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants[1].info.name
    );
  }

  return actualRestaurant == 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          className="search-input"
          type="text"
          placeholder="search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        ></input>
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchInput, actualRestaurant);
            setFilteredRestaurant(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="restaurant-list">
        {filteredRestaurant.map((rest) => {
          // if (filteredRestaurant == 0) return <h1>No Record found</h1>;
          return filteredRestaurant == 0 ? (
            <h1>No Record found</h1>
          ) : (
            <RestroCard key={rest?.info?.id} data={rest} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
