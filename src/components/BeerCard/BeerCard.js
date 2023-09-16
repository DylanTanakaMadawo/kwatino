import React from "react";

import "./BeerCard.css";
import { Divider } from "@mui/material";
import { Link } from "react-router-dom";

export const BeerCard = (props) => {
  const { id, name, image, price } = props.data;
  return (
    <div className="beer-card-container">
      <div className="beer-card">
        <div className="beer-image-container">
          <img src={image} alt="card" />
        </div>
        <Divider sx={{ margin: "0 20px" }} />
        <p className="beer-name">{name}</p>
        <p>${price}</p>
        <div className="beer-btn-container">
          <Link className="cart-btn">Add To Cart</Link>
        </div>
      </div>
    </div>
  );
};
