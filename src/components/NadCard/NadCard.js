import React from "react";

import "./NadCard.css";
import { Divider } from "@mui/material";
import { Link } from "react-router-dom";

export const NadCard = (props) => {
  const { id, name, image, price } = props.data;
  return (
    <div className="nad-card-container">
      <div className="nad-card">
        <div className="nad-image-container">
          <img src={image} alt="card" />
        </div>
        <Divider sx={{ margin: "0 20px" }} />
        <p className="nad-name">{name}</p>
        <p>${price}</p>
        <div className="nad-btn-container">
          <Link className="cart-btn">Add To Cart</Link>
        </div>
      </div>
    </div>
  );
};
