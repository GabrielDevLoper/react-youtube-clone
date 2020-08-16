import React, { useContext } from "react";
import {
  Drawer,
  Toolbar,
  List,
  ListItemIcon,
  ListItem,
  Divider,
  ListItemText,
  Box,
  Typography,
  Button,
  ListSubheader,
  Hidden,
} from "@material-ui/core";
import clsx from "clsx";

//estilização
import { useStyles } from "./styles";

//contexts
import { VisibleSideBar } from "../../context/VisibleSideBar";

// Icones usados
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import AvatarIcon from "@material-ui/icons/AccountCircle";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import MusicsIcon from "../../assets/Icons-Youtuber/musics.jpg";
import SportsIcon from "../../assets/Icons-Youtuber/sports.jpg";
import GamesIcon from "../../assets/Icons-Youtuber/games.jpg";
import MoviesIcon from "../../assets/Icons-Youtuber/movies.jpg";
import NewsIcon from "../../assets/Icons-Youtuber/news.jpg";
import LivesIcon from "../../assets/Icons-Youtuber/lives.jpg";
import LearningIcon from "../../assets/Icons-Youtuber/learning.jpg";
import Video360 from "../../assets/Icons-Youtuber/video-360.jpg";
import Youtube from "../../assets/Icons-Youtuber/youtube.jpg";

const firstItensList = [
  { name: "Inicio", icon: <HomeIcon /> },
  { name: "Em alta", icon: <WhatshotIcon /> },
  { name: "Inscrições", icon: <SubscriptionsIcon /> },
];

const secondItensList = [
  { name: "Bibilioteca", icon: <VideoLibraryIcon /> },
  { name: "Em Histórico", icon: <HistoryIcon /> },
];

const treeItensList = [
  {
    name: "Músicas",
    icon: (
      <img
        src={MusicsIcon}
        width="24"
        height="24"
        style={{ borderRadius: 12 }}
      />
    ),
  },
  {
    name: "Esportes",
    icon: (
      <img
        src={SportsIcon}
        width="24"
        height="24"
        style={{ borderRadius: 12 }}
      />
    ),
  },
  {
    name: "Jogos",
    icon: (
      <img
        src={GamesIcon}
        width="24"
        height="24"
        style={{ borderRadius: 12 }}
      />
    ),
  },
  {
    name: "Filmes",
    icon: (
      <img
        src={MoviesIcon}
        width="24"
        height="24"
        style={{ borderRadius: 12 }}
      />
    ),
  },
  {
    name: "Notícias",
    icon: (
      <img src={NewsIcon} width="24" height="24" style={{ borderRadius: 12 }} />
    ),
  },
  {
    name: "Ao vivo",
    icon: (
      <img
        src={LivesIcon}
        width="24"
        height="24"
        style={{ borderRadius: 12 }}
      />
    ),
  },
  {
    name: "Destaque",
    icon: (
      <img
        src={LearningIcon}
        width="24"
        height="24"
        style={{ borderRadius: 12 }}
      />
    ),
  },
  {
    name: "Spotlight",
    icon: (
      <img src={Youtube} width="24" height="24" style={{ borderRadius: 12 }} />
    ),
  },
  {
    name: "Video em 360",
    icon: (
      <img src={Video360} width="24" height="24" style={{ borderRadius: 12 }} />
    ),
  },
];

function SideBar() {
  const classes = useStyles();
  const { visibleList } = useContext(VisibleSideBar);
  return (
    <>
      {visibleList && (
        <Hidden mdDown>
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <Toolbar />
            <div className={classes.drawerContainer}>
              <List>
                {firstItensList.map((item) => (
                  <ListItem
                    classes={{ root: classes.listItem }}
                    button
                    key={item.name}
                  >
                    <ListItemIcon>{item.icon} </ListItemIcon>
                    <ListItemText
                      classes={{
                        primary: classes.listItemText,
                      }}
                      primary={item.name}
                    />
                  </ListItem>
                ))}
              </List>
              <Divider />
              <List>
                {secondItensList.map((item) => (
                  <ListItem
                    classes={{ root: classes.listItem }}
                    button
                    key={item.name}
                  >
                    <ListItemIcon>{item.icon} </ListItemIcon>
                    <ListItemText
                      classes={{
                        primary: classes.listItemText,
                      }}
                      primary={item.name}
                    />
                  </ListItem>
                ))}
              </List>
              <Divider />
              <Box p={2}>
                <Typography variant="body2">
                  Faça login para curtir videos, comentar e se inscrever.
                </Typography>
                <Box mt={2}>
                  <Button
                    variant="outlined"
                    color="secondary"
                    startIcon={<AvatarIcon fontSize="large" />}
                  >
                    Fazer Login
                  </Button>
                </Box>
              </Box>
              <Divider />
              <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                  <ListSubheader
                    component="div"
                    aria-labelledby="nested-list-subheader"
                    className={classes.subHeader}
                  >
                    O melhor do youtube
                  </ListSubheader>
                }
              >
                {treeItensList.map((item) => (
                  <ListItem
                    classes={{ root: classes.listItem }}
                    button
                    key={item.name}
                  >
                    <ListItemIcon>{item.icon} </ListItemIcon>
                    <ListItemText
                      classes={{
                        primary: classes.listItemText,
                      }}
                      primary={item.name}
                    />
                  </ListItem>
                ))}
              </List>
              <Divider />
              <List>
                <ListItem classes={{ root: classes.listItem }} button>
                  <ListItemIcon>{<AddCircleIcon />}</ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={"Procurar mais"}
                  />
                </ListItem>
              </List>
            </div>
          </Drawer>
        </Hidden>
      )}
    </>
  );
}

export default SideBar;
