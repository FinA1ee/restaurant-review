import React, { useState } from "react";
import Container from "./Container";
import SearchBar from "./SearchBar";
import SelectBar from "./SelectBar";

function Search() {
  const [filter, setFilter] = useState({
    restaurantsPerPage: 20,
    page: 0,
  });

  const [name, setName] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [cuisine, setCuisine] = useState("");

  const handleNameEnterComplete = (e, name) => {
    setName(name);
  };

  const handleZipEnterComplete = (e, zipcode) => {
    setZipcode(zipcode);
  };

  const handleCuisineEnterComplete = (e, cuisine) => {
    console.log("Cuisine: ", cuisine);
    setCuisine(cuisine);
  };

  const onFilterSubmit = (e) => {
    console.log("On Filter Submit");
    e.preventDefault();
    handleSubmit(e, {
      ...filter,
      name: name,
      zipcode: zipcode,
      cuisine: cuisine,
    });
  };

  const handleSubmit = (e, filter) => {
    e.preventDefault();
    setFilter(filter);
  };

  return (
    <form onSubmit={onFilterSubmit}>
      <SearchBar
        placeholder={"Search By Name"}
        handleEnterComplete={handleNameEnterComplete}
      />
      <SearchBar
        placeholder={"Search By Zip"}
        handleEnterComplete={handleZipEnterComplete}
      />
      <SelectBar
        placeholder={"Select a Cuisine"}
        handleEnterComplete={handleCuisineEnterComplete}
      />

      <button
        style={{ marginBottom: "20px" }}
        className="btn btn-outline-secondary"
        type="submit"
        id="button-addon2"
      >
        Search
      </button>
      <Container filter={filter} />
    </form>
  );
}

export default Search;
