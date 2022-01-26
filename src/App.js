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
      <Button variant="contained" color="secondary">
        Click para jogar
      </Button>
    </ThemeProvider>
  );
}

export default App;
