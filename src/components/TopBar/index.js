import React, { useContext } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Box,
  Switch,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

import { VisibleSideBar } from "../../context/VisibleSideBar";

// import icons
import MenuIcon from "@material-ui/icons/Menu";
import AvatarIcon from "@material-ui/icons/AccountCircle";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AppsIcon from "@material-ui/icons/Apps";

import { useStyles } from "./styles";

function TopBar({ darkMode, setDarkMode }) {
  const classes = useStyles();
  const { handleToggleSideBar } = useContext(VisibleSideBar);
  const theme = useTheme();

  return (
    <AppBar className={classes.appBar} color="inherit">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuIcon}
          aria-label="menu"
          onClick={handleToggleSideBar}
        >
          <MenuIcon />
        </IconButton>
        <img
          src={
            theme.palette.type === "dark"
              ? "/images/branco.png"
              : "/images/preto.png"
          }
          alt="logo"
          className={classes.logo}
        />
        <div className={classes.grow} />
        <Switch
          checked={darkMode}
          onChange={(e) => setDarkMode(!darkMode)}
          color="secondary"
          name="checkedB"
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
        <IconButton className={classes.icons}>
          <VideoCallIcon />
        </IconButton>
        <IconButton className={classes.icons}>
          <AppsIcon />
        </IconButton>
        <IconButton className={classes.icons}>
          <MoreVertIcon />
        </IconButton>

        <Button
          variant="outlined"
          color="secondary"
          startIcon={<AvatarIcon fontSize="large" />}
        >
          Fazer Login
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
