import {
  Button,
  TextareaAutosize,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import "./createForum.css";

export default function forum() {
  return (
    <div>
      <div className="forum">
        <form>
          <Typography variant="h4" component="h1" style={{ textAlign: "left" }}>
            Create Forum
          </Typography>
          <br />
          <br />

          <TextField
            type="text"
            label="title"
            variant="outlined"
            style={{ borderColor: "whitesmoke", width: "100%" }}
          />
          <br />
          <br />
          <TextareaAutosize
            color="primary"
            aria-label=""
            placeholder="description"
            style={{ width: "100%" }}
            minRows={10}
            maxRows={15}
          />
          <br />
          <br />
          <Button type="submit" variant="contained" color="primary">
            Create
          </Button>
        </form>
      </div>
    </div>
  );
}
