import * as React from "react";
import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material";

const useStyles = makeStyles({
  root: {
    background: "red",
    height: "100vh",
  },
});

export default function Home() {
  const classes = useStyles();
  return <div className={classes.root}>Hook</div>;
}
