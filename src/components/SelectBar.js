import React, { useEffect } from "react";
import { useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { RestaurantContext } from "../context/RestaurantContext";

function SelectBar(props) {
  const { cuisineLst, runGetCuisineLst } = useContext(RestaurantContext);
  const [selectItem, setSelectItem] = useState("");

  const { placeholder, handleEnterComplete } = props;

  const onSelectChange = (e) => {
    console.log(e.target.value);

    setSelectItem(e.target.value);
  };

  const onSelectComplete = (e) => {
    if (selectItem === "Any") handleEnterComplete(e, "");
    else handleEnterComplete(e, selectItem);
  };

  useEffect(() => {
    runGetCuisineLst(selectItem);
  }, [selectItem]);

  let key = -1;

  const options = cuisineLst.map((item) => {
    key += 1;
    if (key === 0) {
      return (
        <option value="" disabled key={key}>
          {placeholder}
        </option>
      );
    }
    if (key === 1) {
      return (
        <option value="Any" key={key}>
          All Cuisine
        </option>
      );
    }
    return <option key={key}>{item}</option>;
  });

  return (
    <select
      style={{ marginBottom: "20px", marginTop: "20px" }}
      defaultValue={placeholder}
      className="form-select"
      aria-label="Default select example"
      onChange={onSelectChange}
      onBlur={onSelectComplete}
      value={selectItem}
    >
      {options}
    </select>
  );
}

export default SelectBar;
