import React from "react";
//import reactDom from "react-dom";
//import { Button } from "@mui/material";
import Home from "./Home";
import { ThemeProvider, createTheme } from "@mui/material/styles";

/*const myStyles = makeStyles({
  root: {},
});
const classes = myStyles();*/

function App() {
  const theme = createTheme({
    spacing: 4,
    palette: {
      primary: {
        main: "#FF69B4",
      },
      secondary: {
        main: "#FF0000",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Home />{" "}
    </ThemeProvider>
  );
}

export default App;
