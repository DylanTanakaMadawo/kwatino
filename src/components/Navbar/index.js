import React from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import { DesktopNavbar } from "./DesktopNavbar";
import { MobileNavbar } from "./MobileNavbar";

export const Navbar = () => {
  const theme = useTheme();
  const ifMatches = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div>
      <>{ifMatches ? <MobileNavbar /> : <DesktopNavbar />}</>
    </div>
  );
};
