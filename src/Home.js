import * as React from "react";
import { makeStyles } from "@mui/styles";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AppsIcon from "@mui/icons-material/Apps";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import Divider from "@mui/material/Divider";
import MailIcon from "@mui/icons-material/Mail";
import ListItemIcon from "@mui/material/ListItemIcon";
import HomeIcon from "@mui/icons-material/Home";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import { AppBar, Button, Box, Toolbar, IconButton } from "@mui/material";
//import { ThermostatRounded } from "@mui/icons-material";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
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
    height: 25,
  },
  listItemText: {
    fontSize: 14,
  },
  listItem: {
    paddingTop: 4,
    paddingBottom: 4,
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box>
        <AppBar
          color="inherit"
          sx={{ boxShadow: 0 }}
          className={classes.appBar}
        >
          <Toolbar>
            <IconButton edge="start" aria-label="menu">
              <MenuIcon />
            </IconButton>

            <img
              src="/images/preto.png"
              alt="logo"
              className={classes.logo}
            ></img>

            <div className={classes.grow}></div>

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

        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{ paper: classes.drawerPaper }}
        >
          <Toolbar />
          <Box sx={{ overflow: "auto" }}>
            <List>
              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>{<HomeIcon />}</ListItemIcon>
                <ListItemText
                  classes={{ primary: classes.listItemText }}
                  primary={"Início"}
                />
              </ListItem>
              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>{<LocalFireDepartmentIcon />}</ListItemIcon>
                <ListItemText
                  classes={{ primary: classes.listItemText }}
                  primary={"Em alta"}
                />
              </ListItem>
              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>{<SubscriptionsIcon />}</ListItemIcon>
                <ListItemText
                  classes={{ primary: classes.listItemText }}
                  primary={"Inscrições"}
                />
              </ListItem>
            </List>
            <Divider />
            <List>
              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>{}</ListItemIcon>
                <ListItemText
                  classes={{ primary: classes.listItemText }}
                  primary={"Biblioteca"}
                />
              </ListItem>
            </List>
            <List>
              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>{}</ListItemIcon>
                <ListItemText
                  classes={{ primary: classes.listItemText }}
                  primary={"Histórico"}
                />
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </Box>
    </div>
  );
}
