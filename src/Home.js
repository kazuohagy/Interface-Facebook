import * as React from "react";
import { makeStyles } from "@mui/styles";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AppsIcon from "@mui/icons-material/Apps";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import AddIcon from "@mui/icons-material/Add";
import Divider from "@mui/material/Divider";

import ListItemIcon from "@mui/material/ListItemIcon";

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
import { styled, useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import UpdateIcon from "@mui/icons-material/Update";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddCircle from "@mui/icons-material/AddCircle";
import ListSubheader from "@mui/material/ListSubheader";
import Grid from "@mui/material/Grid";

import { pink } from "@mui/material/colors";
import GroupIcon from "@mui/icons-material/Group";
import FlagIcon from "@mui/icons-material/Flag";
import NotificationsIcon from "@mui/icons-material/Notifications";
//import { ThermostatRounded } from "@mui/icons-material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));
const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    backgroundColor: theme.palette.background.dark,
  },
  appBar: {
    zIndex: 99999,
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
  message: { height: 25 },
  appbar: { display: "flex", justifyContent: "space-around" },
  esquerda: {
    diplay: "flex",
    justifyContent: "space-around",
    paddingLeft: 50,
  },
}));

export default function Home({ darkMode, setDarkMode }) {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div className={classes.root}>
      <AppBar
        color="inherit"
        sx={{ boxShadow: 0 }}
        className={classes.appBar}
        sx={{ zIndex: 999 }}
      >
        <Toolbar>
          <div className={classes.esquerda}>
            <IconButton>
              <img
                src={"/images/facebookIcon.png"}
                alt="logo"
                className={classes.logo}
              ></img>
            </IconButton>
            <IconButton
              edge="start"
              aria-label="menu"
              className={classes.espacamento}
            >
              <SearchIcon />
            </IconButton>
          </div>
          <div className={classes.grow}></div>
          <div className={classes.esquerda}>
            <IconButton
              edge="start"
              aria-label="menu"
              className={classes.logo}
              color="secondary"
            >
              <HomeIcon />
            </IconButton>
            <IconButton
              edge="start"
              aria-label="menu"
              className={classes.espacamento}
              color="secondary"
            >
              <GroupIcon />
            </IconButton>
            <IconButton
              edge="start"
              aria-label="menu"
              className={classes.espacamento}
              color="secondary"
            >
              <FlagIcon />
            </IconButton>
            <IconButton
              edge="start"
              aria-label="menu"
              className={classes.espacamento}
              color="secondary"
            >
              <MenuIcon />
            </IconButton>
          </div>
          <div className={classes.grow}></div>
          <div>
            <Switch
              value={darkMode}
              onChange={() => setDarkMode(!darkMode)}
              className={classes.icons}
              color="secondary"
            />
            <IconButton className={classes.icons}>
              <AddIcon />
            </IconButton>

            <IconButton className={classes.icons}>
              <img
                src={"/images/message.png"}
                alt="message"
                className={classes.message}
              ></img>
            </IconButton>

            <IconButton className={classes.icons}>
              <NotificationsIcon />
            </IconButton>

            <IconButton className={classes.icons}>
              <ArrowDropDownIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <div>
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
                  primary={"Japaranha Aranha"}
                />
              </ListItem>
              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>{<LocalFireDepartmentIcon />}</ListItemIcon>
                <ListItemText
                  classes={{ primary: classes.listItemText }}
                  primary={"Encontrar amigos"}
                />
              </ListItem>
              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>{<SubscriptionsIcon />}</ListItemIcon>
                <ListItemText
                  classes={{ primary: classes.listItemText }}
                  primary={"Grupos"}
                />
              </ListItem>
            </List>

            <List>
              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>{<VideoLibraryIcon />}</ListItemIcon>
                <ListItemText
                  classes={{ primary: classes.listItemText }}
                  primary={"Marketplace"}
                />
              </ListItem>
            </List>
            <List>
              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>{<UpdateIcon />}</ListItemIcon>
                <ListItemText
                  classes={{ primary: classes.listItemText }}
                  primary={"Watch"}
                />
              </ListItem>
            </List>

            <List>
              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>{<VideoLibraryIcon />}</ListItemIcon>
                <ListItemText
                  classes={{ primary: classes.listItemText }}
                  primary={"Lembrança"}
                />
              </ListItem>
            </List>
            <List>
              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>{<VideoLibraryIcon />}</ListItemIcon>
                <ListItemText
                  classes={{ primary: classes.listItemText }}
                  primary={"Salvos"}
                />
              </ListItem>
            </List>
            <List>
              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>{<VideoLibraryIcon />}</ListItemIcon>
                <ListItemText
                  classes={{ primary: classes.listItemText }}
                  primary={"Paginas"}
                />
              </ListItem>
            </List>
            <List>
              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>{<VideoLibraryIcon />}</ListItemIcon>
                <ListItemText
                  classes={{ primary: classes.listItemText }}
                  primary={"Eventos"}
                />
              </ListItem>
            </List>
            <List>
              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>{<VideoLibraryIcon />}</ListItemIcon>
                <ListItemText
                  classes={{ primary: classes.listItemText }}
                  primary={"Mais recentes"}
                />
              </ListItem>
            </List>
            <List>
              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>{<VideoLibraryIcon />}</ListItemIcon>
                <ListItemText
                  classes={{ primary: classes.listItemText }}
                  primary={"Favoritos"}
                />
              </ListItem>
            </List>
            <List>
              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>{<VideoLibraryIcon />}</ListItemIcon>
                <ListItemText
                  classes={{ primary: classes.listItemText }}
                  primary={"Ver mais"}
                />
              </ListItem>
            </List>
          </Box>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
            dolor purus non enim praesent elementum facilisis leo vel. Risus at
            ultrices mi tempus imperdiet. Semper risus in hendrerit gravida
            rutrum quisque non tellus. Convallis convallis tellus id interdum
            velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean
            sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
            integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
            eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
            quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
            vivamus at augue. At augue eget arcu dictum varius duis at
            consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
            donec massa sapien faucibus et molestie ac.
          </Typography>
          <Typography paragraph>
            Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
            ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
            elementum integer enim neque volutpat ac tincidunt. Ornare
            suspendisse sed nisi lacus sed viverra tellus. Purus sit amet
            volutpat consequat mauris. Elementum eu facilisis sed odio morbi.
            Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt
            ornare massa eget egestas purus viverra accumsan in. In hendrerit
            gravida rutrum quisque non tellus orci ac. Pellentesque nec nam
            aliquam sem et tortor. Habitant morbi tristique senectus et.
            Adipiscing elit duis tristique sollicitudin nibh sit. Ornare aenean
            euismod elementum nisi quis eleifend. Commodo viverra maecenas
            accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam
            ultrices sagittis orci a.
          </Typography>
        </Box>
      </div>
    </div>
  );
}
