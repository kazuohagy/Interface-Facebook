import * as React from "react";
import { makeStyles } from "@mui/styles";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AppsIcon from "@mui/icons-material/Apps";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import { AppBar, Button, Box, Toolbar, IconButton } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  appBar: {
    boxShadow: "none",
  },
  icons: {
    padding: theme.spacing(5),
  },
  MenuIcon: {
    paddingRight: theme.spacing(5),
    paddingLeft: theme.spacing(6),
  },
  grow: {
    flexGrow: 1,
  },
  logo: {
    height: 25,
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {" "}
      <Box sx={{ flexGrow: 1 }}>
        <AppBar color="inherit" className={classes.appBar}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              className={classes.MenuIcon}
            >
              <MenuIcon />
            </IconButton>
            <a href="">
              <img
                src="/images/preto.png"
                alt="logo"
                className={classes.logo}
              ></img>
            </a>
            <div className={classes.grow}></div>

            <IconButton
              size="large"
              color="inherit"
              sx={{ mr: 2 }}
              className={classes.icons}
            >
              <VideoCallIcon></VideoCallIcon>
            </IconButton>

            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              className={classes.icons}
            >
              <AppsIcon />
            </IconButton>

            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              className={classes.icons}
            >
              <MoreVertIcon />
            </IconButton>

            <Button
              startIcon={<AccountCircleIcon />}
              variant="outlined"
              color="secondary"
            >
              fazer Login
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
