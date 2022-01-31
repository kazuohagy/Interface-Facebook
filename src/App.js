import React, { useState } from "react";
//import reactDom from "react-dom";
//import { Button } from "@mui/material";
import Home from "./Home";
import { ThemeProvider, createTheme } from "@mui/material/styles";

/*const myStyles = makeStyles({
  root: {},
});
const classes = myStyles();*/

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const theme = createTheme({
    spacing: 4,
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: "#f44336",
      },
      secondary: {
        main: "#3EA6FF",
      },
      background: {
        default: darkMode ? "#232323" : "#FFF",
        dark: darkMode ? "#181818" : "#f4f6f8",
        paper: darkMode ? "#232323" : "#FFF",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Home darkMode={darkMode} setDarkMode={setDarkMode} />{" "}
    </ThemeProvider>
  );
}

export default App;
