import React from "react";

import "./WineCard.css";
import { Divider } from "@mui/material";
import { Link } from "react-router-dom";

export const WineCard = () => {
  return (
    <div className="wine-card-container">
      <div className="wine-card">
        <div className="wine-image-container">
          <img src="" alt="card" />
        </div>
        <Divider sx={{ margin: "0 20px" }} />
        <p className="wine-name">Name Of Wine</p>
        <p>$1000</p>
        <div className="wine-btn-container">
          <Link className="cart-btn">Add To Cart</Link>
        </div>
      </div>
    </div>
  );
};
