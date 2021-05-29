import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function SearchBar(props) {
  const [searchEntry, setSearchEntry] = useState("");
  const { placeholder, handleEnterComplete } = props;

  const onEnterChange = (e) => {
    setSearchEntry(e.target.value);
  };

  const onEnterComplete = (e) => {
    handleEnterComplete(e, searchEntry);
  };

  return (
    <input
      style={{ marginBottom: "20px", marginTop: "20px" }}
      type="text"
      className="form-control"
      placeholder={placeholder}
      aria-label="Recipient's username"
      aria-describedby="button-addon2"
      onBlur={onEnterComplete}
      onChange={onEnterChange}
      value={searchEntry}
    />
  );
}

export default SearchBar;
