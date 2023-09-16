import React from "react";

import "./LiquorCard.css";
import { Divider } from "@mui/material";
import { Link } from "react-router-dom";

export const LiquorCard = (props) => {
  const { id, name, image, price } = props.data;
  return (
    <div className="liqour-card-container">
      <div className="liqour-card">
        <div className="liqour-image-container">
          <img src={image} alt="card" />
        </div>
        <Divider sx={{ margin: "0 20px" }} />
        <p className="liq-name">{name}</p>
        <p>${price}</p>
        <div className="liq-btn-container">
          <Link className="cart-btn">Add To Cart</Link>
        </div>
      </div>
    </div>
  );
};
