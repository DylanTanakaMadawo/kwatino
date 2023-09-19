import React from "react";

import "./Footer.css";

import { Link } from "react-router-dom";

import { Facebook, Instagram, Twitter } from "@mui/icons-material";

export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-top">
        <div className="top-left">
          <h1>Follow Us</h1>
          <div className="top-left-links">
            <Link className="footer-links">
              <Instagram />
            </Link>
            <Link className="footer-links">
              <Facebook />
            </Link>
            <Link className="footer-links">
              <Twitter />
            </Link>
          </div>
        </div>
        <div className="top-right">
          <h1>Partner with Us</h1>
          <p>For Business</p>
          <p>Retailers</p>
          <p>Brands</p>
          <p>Data</p>
          <p>Become an affliate</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Terms of Services | KwaTino All Rights Reserved</p>
      </div>
    </div>
  );
};
