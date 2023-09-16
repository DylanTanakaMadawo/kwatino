import { createTheme } from "@mui/material";

const theme = createTheme({
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          padding: "20px 0 20px 0",
          width: "100%",
          backgroundColor: "white",
          color: "black",
          //   borderRight: "1px solid black",
        },
      },
    },
  },
});

export default theme;
