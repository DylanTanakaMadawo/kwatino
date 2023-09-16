import { ThemeProvider } from "@mui/material";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { UIProvider } from "./drawerContext";
import theme from "./theme";
import { NavbarDrawer } from "./components/Navbar/NavbarDrawer";
import { BrowserRouter } from "react-router-dom";
import { Homepage } from "./components/Homepage/Homepage";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <UIProvider>
          <BrowserRouter>
            <Navbar />
            <NavbarDrawer />
            <Homepage />
            <Footer />
          </BrowserRouter>
        </UIProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
