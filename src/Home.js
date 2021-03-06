import * as React from "react";
import { makeStyles } from "@mui/styles";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import StarIcon from "@mui/icons-material/Star";
import AppsIcon from "@mui/icons-material/Apps";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import GroupsIcon from "@mui/icons-material/Groups";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import FlagIcon from "@mui/icons-material/Flag";
import StorefrontIcon from "@mui/icons-material/Storefront";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import AddIcon from "@mui/icons-material/Add";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import ListItemIcon from "@mui/material/ListItemIcon";
import BookmarkIcon from "@mui/icons-material/Bookmark";

import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import SearchIcon from "@mui/icons-material/Search";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
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
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AddCircle from "@mui/icons-material/AddCircle";
import ListSubheader from "@mui/material/ListSubheader";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Grid from "@mui/material/Grid";
import InputBase from "@mui/material/InputBase";
import { pink, yellow } from "@mui/material/colors";
import GroupIcon from "@mui/icons-material/Group";

import NotificationsIcon from "@mui/icons-material/Notifications";
import TextField from "@mui/material/TextField";
//import { ThermostatRounded } from "@mui/icons-material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { alpha } from "@mui/material/styles";
import { FormatBold, HorizontalRule } from "@mui/icons-material";
import { display, flexbox } from "@mui/system";
const itemData = [
  {
    img: "https://th.bing.com/th/id/OIP.iHBC4qafIiXEbKST6EZ7YgHaIc?pid=ImgDet&rs=1",
    title: "Mario",
  },
  {
    img: "https://th.bing.com/th/id/R.e30222f12bee6f4db8111f7bc7a42157?rik=S2VZvHvdxJiAhg&pid=ImgRaw&r=0",
    title: "Luigi",
  },
  {
    img: "https://th.bing.com/th/id/OIP.hVvYqKNOPGbI0eNkR0g9NQHaG4?pid=ImgDet&rs=1",
    title: "Bowser",
  },
];
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
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
      <Box sx={{ display: "flex" }}>
        <AppBar
          color="inherit"
          sx={{ boxShadow: 0 }}
          className={classes.appBar}
          position="fixed"
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
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

        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{ paper: classes.drawerPaper }}
        >
          <Toolbar />
          <Box sx={{ overflow: "auto" }}>
            <List>
              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>
                  <Avatar alt="Remy Sharp" src="images/miranha.jpg"></Avatar>
                </ListItemIcon>
                <ListItemText
                  classes={{ primary: classes.listItemText }}
                  primary={"Japaranha Aranha"}
                />
              </ListItem>
              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>
                  {<PeopleAltIcon sx={{ color: "#00BFFF" }} />}
                </ListItemIcon>
                <ListItemText
                  classes={{ primary: classes.listItemText }}
                  primary={"Encontrar amigos"}
                />
              </ListItem>
              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>
                  <GroupsIcon sx={{ color: "#00BFFF" }} />
                </ListItemIcon>
                <ListItemText
                  classes={{ primary: classes.listItemText }}
                  primary={"Grupos"}
                />
              </ListItem>
            </List>

            <List>
              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>
                  {<StorefrontIcon sx={{ color: "#00BFFF" }} />}
                </ListItemIcon>
                <ListItemText
                  classes={{ primary: classes.listItemText }}
                  primary={"Marketplace"}
                />
              </ListItem>
            </List>
            <List>
              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>
                  <VideoCallIcon sx={{ color: "#00BFFF" }} />
                </ListItemIcon>
                <ListItemText
                  classes={{ primary: classes.listItemText }}
                  primary={"Watch"}
                />
              </ListItem>
            </List>

            <List>
              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>
                  {<UpdateIcon sx={{ color: "#00BFFF" }} />}
                </ListItemIcon>
                <ListItemText
                  classes={{ primary: classes.listItemText }}
                  primary={"Lembran??a"}
                />
              </ListItem>
            </List>
            <List>
              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>
                  {<BookmarkIcon sx={{ color: "#A020F0" }} />}
                </ListItemIcon>
                <ListItemText
                  classes={{ primary: classes.listItemText }}
                  primary={"Salvos"}
                />
              </ListItem>
            </List>
            <List>
              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>
                  {<FlagIcon sx={{ color: "orange" }} />}
                </ListItemIcon>
                <ListItemText
                  classes={{ primary: classes.listItemText }}
                  primary={"Paginas"}
                />
              </ListItem>
            </List>
            <List>
              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>
                  {<LocalActivityIcon sx={{ color: "red" }} />}
                </ListItemIcon>
                <ListItemText
                  classes={{ primary: classes.listItemText }}
                  primary={"Eventos"}
                />
              </ListItem>
            </List>
            <List>
              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>
                  {<AccessTimeFilledIcon sx={{ color: "#00BFFF" }} />}
                </ListItemIcon>
                <ListItemText
                  classes={{ primary: classes.listItemText }}
                  primary={"Mais recentes"}
                />
              </ListItem>
            </List>
            <List>
              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>
                  {<StarIcon sx={{ color: "yellow" }} />}
                </ListItemIcon>
                <ListItemText
                  classes={{ primary: classes.listItemText }}
                  primary={"Favoritos"}
                />
              </ListItem>
            </List>
            <List>
              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>{<ArrowDropDownIcon />}</ListItemIcon>
                <ListItemText
                  classes={{ primary: classes.listItemText }}
                  primary={"Ver mais"}
                />
              </ListItem>
            </List>
          </Box>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, bgcolor: "#F4F6F8", p: 3 }}>
          <DrawerHeader />

          <Box
            sx={{
              p: 2,
              bgcolor: "#FFFFFF",
              color: "black",
              margin: 8,
            }}
          >
            <IconButton color="secondary">
              <AddIcon />
            </IconButton>
            Criar story
            <Typography variant="subtitle1" gutterBottom component="div">
              Compartilhar uma foto ou escreva algo
            </Typography>
          </Box>
          <Box
            sx={{
              p: 2,
              bgcolor: "#FFFFFF",
              color: "black",
              margin: 8,
            }}
          >
            <Box sx={{ flexGrow: 1 }}>
              <IconButton>
                <Avatar alt="Remy Sharp" src="images/miranha.jpg"></Avatar>
              </IconButton>{" "}
              <IconButton>No que voc?? est?? pensando, Japaranha?</IconButton>
            </Box>

            <Grid container justifyContent="center">
              <Grid item>
                <Button>
                  <OndemandVideoIcon sx={{ marginRight: 2 }} />
                  <Typography color={"#696969"}>Video ao vivo</Typography>
                </Button>
                <Button>
                  <PhotoLibraryIcon sx={{ marginRight: 2, color: "#32CD32" }} />
                  <Typography color={"#696969"}>Foto/video</Typography>
                </Button>
                <Button>
                  <TagFacesIcon sx={{ marginRight: 2, color: "#FFD700" }} />
                  <Typography color={"#696969"}>
                    Sentimento/atividade
                  </Typography>
                </Button>
              </Grid>
            </Grid>
          </Box>
          <Box
            sx={{
              p: 2,
              bgcolor: "#FFFFFF",
              color: "black",
              margin: 8,
              flexGrow: 1,
            }}
          >
            <Button>
              <VideoCallIcon sx={{ marginRight: 2, color: "#6A5ACD" }} />
              <Typography color={"#696969"}>Criar sala</Typography>
            </Button>
          </Box>

          <Box
            sx={{
              p: 2,
              bgcolor: "#FFFFFF",
              color: "black",
              margin: 8,
            }}
          >
            <ImageList
              sx={{ width: 500, height: 450 }}
              cols={3}
              rowHeight={164}
            >
              <Typography variant="subtitle1">
                {" "}
                Pessoas que voc?? talvez conhe??a
              </Typography>
              <div className={classes.grow}></div>
              <IconButton>
                <MoreHorizIcon></MoreHorizIcon>
              </IconButton>
              {itemData.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                  />
                  <ImageListItemBar title={item.title} />
                </ImageListItem>
              ))}
              <Grid container justifyContent="right">
                <Grid item>
                  <Button sx={{ display: flexbox }}>Ver todos</Button>
                </Grid>
              </Grid>
            </ImageList>
          </Box>

          <Box
            sx={{
              p: 2,
              bgcolor: "#FFFFFF",
              color: "black",
              margin: 8,
            }}
          >
            <Grid container justifyContent="center">
              <Grid item>
                <Typography variant="h5">
                  {" "}
                  Pessoas que voc?? talvez conhe??a
                </Typography>
                <Typography variant="subtitle-1">
                  {" "}
                  Adicione mais amigos para ver mais publica????es no seu Feed de
                  Not??cias.
                </Typography>
                <p />
                <Button variant="contained">Encontrar amigos</Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
