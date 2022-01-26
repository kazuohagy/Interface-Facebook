import React from "react";
import reactDom from "react-dom";
import { Button } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

function App() {
  const theme = createTheme({
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
      <div style={{ background: "red", height: "100vh" }}></div>
    </ThemeProvider>
  );
}

export default App;
