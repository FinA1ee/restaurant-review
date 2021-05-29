import React, { useContext, useEffect } from "react";
import { RestaurantContext } from "../context/RestaurantContext";
import Loader from "./Loader";
import RestaurantBox from "./RestaurantBox.js";

const Container = ({ filter }) => {
  const { restaurantLst, runSearchOnFilter, loading } =
    useContext(RestaurantContext);

  useEffect(() => {
    runSearchOnFilter(filter);
  }, [filter]);

  let key = -1;
  const restGallery = restaurantLst.map((restObj) => {
    key += 1;
    return <RestaurantBox data={restObj} key={key} />;
  });

  return !loading ? <div className="row">{restGallery}</div> : <Loader />;
};

export default Container;
