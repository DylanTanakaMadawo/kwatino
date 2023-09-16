import { ShoppingCart } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";

export const DesktopNavbar = () => {
  return (
    <div className="navbar-container">
      <div className="left-side">
        <h1>KwaTino</h1>
      </div>
      <div className="right-side">
        <div className="nav-links-container">
          <a className="links" href="#liquor">
            Liquor
          </a>
          <a className="links" href="#beer">
            Beer
          </a>
          <a className="links" href="#wine">
            Wine
          </a>
          <a className="links" href="#non-alcaholics">
            Non-Alcaholics
          </a>
        </div>
        <div className="nav-cart">
          <Link className="links cart-link">
            <p>Cart</p>
            <ShoppingCart />
          </Link>
        </div>
      </div>
    </div>
  );
};
