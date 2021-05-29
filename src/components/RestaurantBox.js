import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function RestaurantBox(props) {
  const { data } = props;
  const { _id, name, cuisine, address } = data;
  const { street, zipcode, building } = address;
  const finalAddress = `${building} ${street}, ${zipcode}`;

  return (
    <div className="col-lg-4 pb-1">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            <strong>Cuisine: </strong>
            {cuisine}
            <br />
            <strong>Address: </strong>
            {finalAddress}
          </p>
          <div className="row">
            <Link
              to={"/reviews/" + _id}
              className="btn btn-primary col-lg-5 mx-1 mb-1"
            >
              View Reviews
            </Link>

            <a
              target="_blank"
              rel="noreferrer"
              href={"https://www.google.com/maps/place/" + finalAddress}
              className="btn btn-primary col-lg-5 mx-1 mb-1"
            >
              View Map
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestaurantBox;
