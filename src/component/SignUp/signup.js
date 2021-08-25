import React, { useState } from "react";
import "./signup.css";
import { makeStyles } from "@material-ui/core";
import { TextField, Typography, Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { userSignup } from "../../redux/actions/userActions";

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
  const [first_name, setFirstName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    this.props.userSignup(
      { email, password, first_name, confirm_password },
      this.props.history
    );
  };

  return (
    <div className="container">
      <div className="signupContainer">
        <Typography variant="h5" component="h3" className={classes.typoh5}>
          Create Ewket account
        </Typography>
        <form onSubmit="" className="signupForm">
          <TextField
            className={classes.input}
            name="first_name"
            id="first_name"
            type="text"
            required
            autoFocus
            label="First name"
            placeholder="Enter your first name"
            variant="outlined"
            color="secondary"
            onChange={(event) => setFirstName(event.target.value)}
          />
          <TextField
            name="last_name"
            id="last_name"
            className={classes.input}
            type="text"
            required
            autoFocus
            label="Last name"
            placeholder="Enter your last name"
            variant="outlined"
            onChange={(event) => setLastName(event.target.value)}
          />
          <TextField
            name="email"
            id="email"
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
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            className={classes.submit}
            label="Sign Up"
            onClick={this.handleSubmit}
          >
            Sign Up
          </Button>
        </form>
      </div>
    </div>
  );
}
