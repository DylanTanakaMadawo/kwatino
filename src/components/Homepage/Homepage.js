import React from "react";
import { Steps } from "../Steps/Steps";

import "./Homepage.css";
import { Divider } from "@mui/material";
import { Liquor } from "../Liquor/Liquor";
import { Beer } from "../Beer/Beer";
import { Wine } from "../Wine/Wine";
import { Nad } from "../Nad/Nad";

export const Homepage = () => {
  return (
    <div className="homepage-container">
      <Steps />
      <Divider sx={{ marginLeft: "100px", marginRight: "100px" }} />
      <Liquor />
      <Divider sx={{ marginLeft: "100px", marginRight: "100px" }} />
      <Beer />
      <Divider sx={{ marginLeft: "100px", marginRight: "100px" }} />
      <Wine />
      <Divider sx={{ marginLeft: "100px", marginRight: "100px" }} />
      <Nad />
    </div>
  );
};
