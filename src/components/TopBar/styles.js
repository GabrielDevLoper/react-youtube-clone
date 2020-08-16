import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  appBar: {
    boxShadow: "none",
    zIndex: theme.zIndex.drawer + 1,
  },
  grow: {
    flexGrow: 1,
  },
  icons: {
    paddingRight: theme.spacing(4),
  },
  menuIcon: {
    paddingRight: theme.spacing(4),
    paddingLeft: theme.spacing(2),
  },
  logo: {
    height: 30,
  },
}));

export { useStyles };
