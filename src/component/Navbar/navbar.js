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
    color: "#fff",
    marginLeft: 40,
    marginBottom: 10,
    fontSize: 15,
    textTransform: "none",
    "&:hover": {
      color: "#183661",
    },
    "&:active": {
      color: "red",
    },
  },
  input: {
    borderColor: "#183661",
  },
  btnlower: {
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
    marginTop: 20,
    color: "black",
    fontSize: 25,
  },
  appBar: {
    paddingBottom: 10,
  },
});

export default function navbar() {
  const classes = useStyles();
  return (
    <AppBar className={classes.appBar} position="static" color="primary">
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

          <div className="signUp">
            <Button
              className={classes.btnlower}
              color="secondary"
              variant="contained"
              href="/login"
            >
              Log In
            </Button>
            <Button
              className={classes.btnlower}
              color="secondary"
              variant="contained"
              href="/signup"
            >
              Sign Up
            </Button>
          </div>
        </div>
        <div className="bottom">
          <div className="navigation">
            <Button
              className={classes.btn}
              variant="filled"
              color="primary"
              startIcon={<HomeIcon />}
              href="/"
            >
              Home
            </Button>
            <Button
              className={classes.btn}
              variant="filled"
              color="primary"
              href="/courses"
            >
              Courses
            </Button>
            <Button
              className={classes.btn}
              startIcon={<ForumIcon />}
              variant="filled"
              color="primary"
              href="/forum"
            >
              Forum
            </Button>
            <Button
              className={classes.btn}
              startIcon={<InfoIcon />}
              variant="filled"
              color="primary"
              href="/about"
            >
              About Us
            </Button>
            <Button
              className={classes.btn}
              startIcon={<GroupWorkIcon />}
              variant="filled"
              color="primary"
              href="/work"
            >
              Work with Us
            </Button>
          </div>
          <div className="search">
            <SearchIcon className={classes.icon} />
            <TextField
              placeholder="search"
              autoFocus
              endIcon={<SearchIcon />}
              className={classes.input}
              multiline
              rows={1}
              size="small"
              type="string"
              label="search"
            />
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
}
