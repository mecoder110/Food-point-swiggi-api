import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { rest_URL } from "../config";

const RestMenu = () => {
  const { id } = useParams();
  const [restaurantMenu, setRestaurantMenu] = useState();

  useEffect(() => {
    getRestaurant();
  }, [restaurantMenu]);

  async function getRestaurant() {
    const data = await fetch(rest_URL + { id });
    //const json = await data.json();
    //console.log(json);
    //setRestaurantMenu(json)
  }

  return (
    <div className="card">
      console.log("RestMenu")
      <h1> Restaurant=====: {id}</h1>
      <h1> Restaurant=====: {id}</h1>
    </div>
  );
};

export default RestMenu;
