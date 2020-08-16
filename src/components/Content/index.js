import React from "react";
import { Box } from "@material-ui/core";

import { useStyles } from "./styles";

function Content({ children }) {
  const classes = useStyles();
  return (
    <Box classNaem={classes.root} p={4}>
      {children}
    </Box>
  );
}

export default Content;
