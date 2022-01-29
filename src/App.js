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
        main: "#f44336",
      },
      secondary: {
        main: "#3EA6FF",
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
