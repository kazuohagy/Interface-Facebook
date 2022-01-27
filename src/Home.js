import * as React from "react";
import { makeStyles } from "@mui/styles";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Button,
  Box,
  Toolbar,
  IconButton,
  Typography,
} from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.primary.main,
    padding: theme.spacing(),
    height: "100vh",
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {" "}
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
