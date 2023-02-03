import { BrowserRouter, Navigation, Route, Routes } from "react-router-dom";
import Home from "./scenes/homePage";
import Navbar from "./scenes/navbar";
import Login from "./scenes/loginPage";
import Profile from "./scenes/profilePage";
import "./App.css";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import { State } from "./types";
import { PaletteMode, ThemeOptions } from "@mui/material";

function App() {
  const mode = useSelector((state: State) => state.mode) as PaletteMode;
  const themeOptions = themeSettings(mode);
  const theme = useMemo(() => createTheme(themeOptions), [mode]);
  const isAuth = Boolean(useSelector((state: State) => state.token));

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/profile/:userid" element={<Profile />} />
            </Routes>
            app
          </CssBaseline>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
