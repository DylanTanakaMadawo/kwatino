import React from "react";

import "./NadCard.css";
import { Divider } from "@mui/material";
import { Link } from "react-router-dom";

export const NadCard = () => {
  return (
    <div className="nad-card-container">
      <div className="nad-card">
        <div className="nad-image-container">
          <img src="" alt="card" />
        </div>
        <Divider sx={{ margin: "0 20px" }} />
        <p className="nad-name">Name Of Drink</p>
        <p>$50</p>
        <div className="nad-btn-container">
          <Link className="cart-btn">Add To Cart</Link>
        </div>
      </div>
    </div>
  );
};
