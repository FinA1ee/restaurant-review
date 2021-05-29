import React, { createContext, useState } from "react";
import RestService from "../service/restaurantApiService.js";

export const RestaurantContext = createContext();

const RestaurantContextProvider = (props) => {
  const [loading, setLoading] = useState(true);
  const [restaurantLst, setRestaurantLst] = useState([]);
  const [cuisineLst, setCuisineLst] = useState([]);

  const runSearchOnFilter = (filter) => {
    setLoading(true);
    const restPerPage = filter["restaurantsPerPage"] || 20;
    const page = filter["page"] || 0;
    const name = filter["name"] || "";
    const zipcode = filter["zipcode"] || "";
    const cuisine = filter["cuisine"] || "";

    RestService.runGetRestaurantsFilter(
      restPerPage,
      page,
      name,
      zipcode,
      cuisine
    )
      .then((response) => {
        setRestaurantLst(response.data.restaurants);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Unable to get restaurants based on names");
      });
  };

  const runGetCuisineLst = () => {
    RestService.runGetAllCuisine()
      .then((response) => {
        setCuisineLst(response.data);
      })
      .catch((error) => {
        console.log("Unable to get cuisines");
      });
  };

  return (
    <RestaurantContext.Provider
      value={{
        restaurantLst,
        cuisineLst,
        loading,
        runSearchOnFilter,
        runGetCuisineLst,
      }}
    >
      {props.children}
    </RestaurantContext.Provider>
  );
};

export default RestaurantContextProvider;
