import * as React from "react";
import { makeStyles } from "@mui/styles";
import MenuIcon from "@mui/icons-material/Menu";

import VideoCallIcon from "@mui/icons-material/VideoCall";
import AppsIcon from "@mui/icons-material/Apps";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import Divider from "@mui/material/Divider";

import ListItemIcon from "@mui/material/ListItemIcon";
import HomeIcon from "@mui/icons-material/Home";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import SearchIcon from "@mui/icons-material/Search";
import {
  AppBar,
  Button,
  Box,
  Toolbar,
  IconButton,
  Hidden,
  Switch,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import UpdateIcon from "@mui/icons-material/Update";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddCircle from "@mui/icons-material/AddCircle";
import ListSubheader from "@mui/material/ListSubheader";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/styles";
//import { ThermostatRounded } from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    backgroundColor: theme.palette.background.dark,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
    borderRight: "none",
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
    height: 50,
    paddingRight: 25,
  },
  listItemText: {
    fontSize: 14,
  },
  listItem: {
    paddingTop: 4,
    paddingBottom: 4,
  },
  subheader: {
    textTransform: "uppercase",
  },
  espacamento: {
    padding: 25,
  },
}));

export default function Home({ darkMode, setDarkMode }) {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div className={classes.root}>
      <AppBar color="inherit" sx={{ boxShadow: 0 }} className={classes.appBar}>
        <Toolbar>
          <img
            src={"/images/facebookIcon.png"}
            alt="logo"
            className={classes.logo}
          ></img>
          <IconButton
            edge="start"
            aria-label="menu"
            className={classes.espacamento}
          >
            <SearchIcon />
          </IconButton>

          <div className={classes.grow}></div>
          <Switch
            value={darkMode}
            onChange={() => setDarkMode(!darkMode)}
            className={classes.icons}
          />
          <IconButton className={classes.icons}>
            <VideoCallIcon></VideoCallIcon>
          </IconButton>

          <IconButton className={classes.icons}>
            <AppsIcon />
          </IconButton>

          <IconButton className={classes.icons}>
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
    </div>
  );
}
