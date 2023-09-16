import React from "react";
import { Drawer, IconButton, List, ListItemText } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useUIContext } from "../../drawerContext";

import { Link } from "react-router-dom";

import "./index.css";

export const NavbarDrawer = () => {
  const { drawerOpen, setDrawerOpen } = useUIContext();
  return (
    <div>
      <>
        {drawerOpen && (
          <IconButton
            onClick={() => setDrawerOpen(false)}
            sx={{
              position: "fixed",
              top: 5,
              left: "46%",
              zIndex: 1999,
            }}
          >
            <CloseIcon
              sx={{
                fontSize: "2rem",
                color: "black",
              }}
            />
          </IconButton>
        )}
        <Drawer open={drawerOpen}>
          <div className="drawer-list-container">
            <List className="drawer-list">
              <ListItemText onClick={() => setDrawerOpen(false)}>
                <a
                  href="#liquor"
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  Liquor
                </a>
              </ListItemText>
              <ListItemText onClick={() => setDrawerOpen(false)}>
                <a
                  href="#liquor"
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  Beer
                </a>
              </ListItemText>
              <ListItemText onClick={() => setDrawerOpen(false)}>
                <a
                  href="#liquor"
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  Wine
                </a>
              </ListItemText>
              <ListItemText onClick={() => setDrawerOpen(false)}>
                <a
                  href="#liquor"
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  Non-Alcaholics
                </a>
              </ListItemText>
              <ListItemText onClick={() => setDrawerOpen(false)}>
                <Link
                  href="#liquor"
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  Cart
                </Link>
              </ListItemText>
            </List>
          </div>
        </Drawer>
      </>
    </div>
  );
};
