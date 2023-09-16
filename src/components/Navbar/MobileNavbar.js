import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useUIContext } from "../../drawerContext";

import "./index.css";

export const MobileNavbar = () => {
  const { setDrawerOpen } = useUIContext();
  return (
    <div className="mobile-container">
      <div className="mobile-left">
        <IconButton onClick={() => setDrawerOpen(true)}>
          <MenuIcon sx={{ color: "black" }} />
        </IconButton>
      </div>
      <div className="mobile-middle">KwaTino</div>
      <div className="mobile-right">
        <IconButton>
          <ShoppingCartIcon sx={{ color: "black" }} />
        </IconButton>
      </div>
    </div>
  );
};
