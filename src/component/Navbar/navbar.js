import {
  AppBar,
  ButtonGroup,
  Button,
  Toolbar,
  Typography,
  TextField,
  Container,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import React from "react";
import "./navbar.css";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import ForumIcon from "@material-ui/icons/Forum";
import InfoIcon from "@material-ui/icons/Info";
import GroupWorkIcon from "@material-ui/icons/GroupWork";

const useStyles = makeStyles({
  btn: {
    color: "black",
    marginLeft: 40,
    fontSize: 15,
    textTransform: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  btnlower: {
    color: "black",
    marginLeft: 60,
    fontSize: 15,
    textTransform: "none",
  },
  typo: {
    color: "black",
    fontSize: "30",
    fontWeight: "bold",
  },
  icon: {
    color: "black",
    fontSize: 45,
  },
  appBar: {
    backgroundColor: "whitesmoke",
    paddingBottom: 10,
  },
});

export default function navbar() {
  const classes = useStyles();
  return (
    <AppBar className={classes.appBar}>
      <Toolbar color="primary" className="navBar">
        <div className="top">
          <Typography
            className={classes.typo}
            variant="h5"
            component="h1"
            gutterBottom
          >
            EWKET
          </Typography>
          <div className="navigation">
            <Button className={classes.btn} startIcon={<HomeIcon />} href="/">
              Home
            </Button>
            <Button className={classes.btn}>Courses</Button>
            <Button
              className={classes.btn}
              startIcon={<ForumIcon />}
              href="/courses"
              href="/forum"
            >
              Forum
            </Button>
            <Button
              className={classes.btn}
              startIcon={<InfoIcon />}
              href="/about"
            >
              About Us
            </Button>
            <Button
              className={classes.btn}
              startIcon={<GroupWorkIcon />}
              href="/work"
            >
              Work with Us
            </Button>
          </div>
        </div>
        <div className="bottom">
          <div className="search">
            <SearchIcon className={classes.icon} />
            <TextField
              placeholder="search"
              variant="outlined"
              autoFocus
              multiline
              rows={1}
              size="small"
              type="string"
              label="search"
            />
          </div>
          <div className="signUp">
            <Button
              className={classes.btnlower}
              color="primary"
              variant="contained"
              href="/login"
            >
              Log In
            </Button>
            <Button
              className={classes.btnlower}
              color="primary"
              variant="contained"
              href="/signup"
            >
              Sign Up
            </Button>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
}
