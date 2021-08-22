import React from "react";
import "./footer.css";
import Facebook from "../../assets/footer/facebook.png";
import Twitter from "../../assets/footer/twitter.png";
import Instagram from "../../assets/footer/instagram.png";
import Telegram from "../../assets/footer/telegram.png";
import { Typography, Button, AppBar, ListItem, List } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  btn: {
    margin: 10,
  },
});

export default function footer() {
  const classes = useStyle();
  return (
    <div className="footer">
      <div className="partOne">
        <Typography type="h6" component="h1">
          Ewket
        </Typography>
      </div>
      <div className="partTwo">
        <Button variant="filled" className={classes.btn}>
          Terms & Condition
        </Button>
        <Button variant="filled">Privacy & Policy</Button>
        <Button variant="filled">Cookies Policy</Button>
        <Button variant="filled">Contact Us</Button>
        <Typography type="h6" component="h3" marginTop="10" variant="contained">
          @EwketInc
        </Typography>
      </div>
      <div className="partThree">
        <div className="elements">
          <h3>Follow us:</h3>
          <div className="iconContainer">
            <img src={Facebook} className="icons" />
            <img src={Twitter} className="icons" />
            <img src={Instagram} className="icons" />
            <img src={Telegram} className="icons" />
          </div>
          <div className="adress">
            <Typography>Contact Us: </Typography>
            <List>
              <ListItem>+251 946650839</ListItem>
              <ListItem>+251 946650839</ListItem>
              <ListItem>+251 946650839</ListItem>
            </List>
          </div>
        </div>
      </div>
    </div>
  );
}
