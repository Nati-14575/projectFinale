import {
  TextField,
  Typography,
  Button,
  Container,
  Link,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import "./login.css";
import { makeStyles } from "@material-ui/core";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import EmailIcon from "@material-ui/icons/Email";

const useStyle = makeStyles({
  input: {
    marginBottom: 20,
    marginTop: 20,
    width: "100%",
    alignSelf: "center",
    color: "black",
  },
  typoh5: {
    margin: 20,
  },
  submit: {
    margin: 20,
    width: "30%",
    alignSelf: "center",
  },
  link: {
    margin: 5,
  },
});

export default function login() {
  const classes = useStyle();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(email, password);
  };

  return (
    <div className="container">
      <div className="loginContainer">
        <Container>
          <Typography variant="h5" component="h3" className={classes.typoh5}>
            LOGIN TO YOUR EWKET ACCOUNT
          </Typography>
          <form
            onSubmit={handleSubmit}
            noValidate
            autoComplete="off"
            className="loginForm"
          >
            <TextField
              startIcon={<EmailIcon />}
              className={classes.input}
              required
              autoFocus
              label="Email"
              placeholder="Enter your email"
              type="email"
              variant="outlined"
              onChange={(event) => setEmail(event.target.value)}
            />
            <TextField
              className={classes.input}
              required
              label="Password"
              autoFocus
              placeholder="Enter your password"
              type="password"
              variant="outlined"
              onChange={(event) => setPassword(event.target.value)}
            />
            <Button
              type="submit"
              color="primary"
              variant="contained"
              className={classes.submit}
              endIcon={<KeyboardArrowRightIcon float="right" label="Log In" />}
            >
              Log In
            </Button>
          </form>
          <div className="underForm">
            <Link component="button" className={classes.link} variant="body2">
              Forgot Password?
            </Link>
            <Link component="button" className={classes.link} variant="body2">
              Create new account?
            </Link>
          </div>
        </Container>
      </div>
    </div>
  );
}
