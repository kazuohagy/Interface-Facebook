import React from "react";
import { makeStyles } from "@mui/material/styles";
const useStyles = makeStyles({
  root: {
    background: "blue",
    height: "100vh",
  },
});

export default function Home() {
  const classes = useStyles();
  return <div className={classes.root}>Hook</div>;
}
