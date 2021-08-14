import React from "react";
import "./signup.css";
import { makeStyles } from "@material-ui/core";
import { TextField, Typography, Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

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
});
export default function signup() {
  const classes = useStyle();
  return (
    <div className="container">
      <div className="signupContainer">
        <Typography variant="h5" component="h3" className={classes.typoh5}>
          Create Ewket account
        </Typography>
        <form onSubmit="" className="signupForm">
          <TextField
            className={classes.input}
            type="text"
            required
            autoFocus
            label="First name"
            placeholder="Enter your first name"
            variant="outlined"
            color="secondary"
          />
          <TextField
            className={classes.input}
            type="text"
            required
            autoFocus
            label="Last name"
            placeholder="Enter your last name"
            variant="outlined"
          />
          <TextField
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
          <TextField
            className={classes.input}
            required
            label="Confirm Password"
            autoFocus
            placeholder="Confirm your password"
            type="password"
            variant="outlined"
            onChange={(event) => setPassword(event.target.value)}
          />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            className={classes.submit}
            label="Sign Up"
          >
            Sign Up
          </Button>
        </form>
      </div>
    </div>
  );
}
