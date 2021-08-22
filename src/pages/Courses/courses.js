import {
  GridList,
  GridListTile,
  GridListTileBar,
  Typography,
} from "@material-ui/core";

import React from "react";
import "./courses.css";
import { makeStyles } from "@material-ui/core/styles";
import CourseCategories from "./Category/courseCategories";

const useStyle = makeStyles({
  tileBar: {
    fontSize: 50,
  },
});

const state = [
  {
    id: 1,
    text: "FaceBook",
    image: "navbar/learning.png",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur nulla quam inventore? Suscipit at autem commodi, facere ullam neque quisquam!",
  },
  {
    id: 2,
    text: "FaceBook",
    image: "navbar/students.png",
    description: "Lorem ipsum",
  },
  {
    id: 2,
    text: "FaceBook",
    image: "navbar/students2.png",
    description: "Lorem ipsum",
  },
  {
    id: 1,
    text: "FaceBook",
    image: "navbar/learning.png",
    description: "Lorem ipsum",
  },
  {
    id: 2,
    text: "FaceBook",
    image: "navbar/students2.png",
    description: "Lorem ipsum",
  },
  {
    id: 1,
    text: "FaceBook",
    image: "navbar/learning.png",
    description: "Lorem ipsum",
  },
  {
    id: 2,
    text: "FaceBook",
    image: "navbar/students.png",
    description: "Lorem ipsum",
  },
  {
    id: 1,
    text: "FaceBook",
    image: "navbar/learning.png",
    description: "Lorem ipsum",
  },

  {
    id: 1,
    text: "FaceBook",
    image: "navbar/learning.png",
    description: "Lorem ipsum",
  },
];

export default function courses() {
  const classes = useStyle();
  return (
    <div className="courses">
      <>
        <div className="category">
          <Typography
            variant="h4"
            component="h1"
            style={{
              marginTop: 20,
              marginBottom: 20,
              padding: 10,
              textAlign: "center",
              backgroundColor: "#51be78",
              dislpay: "block",
            }}
          >
            Categories
          </Typography>
          <CourseCategories item={state} />;
        </div>
      </>
      <div className="courseList">
        <Typography
          variant="h4"
          component="h1"
          style={{
            marginTop: 20,
            marginBottom: 20,
            padding: 10,
            textAlign: "center",
          }}
        >
          Courses
        </Typography>
        <div className="grid">
          <GridList cellHeight={400} col={1} style={{ marginBottom: 100 }}>
            {state.map((item) => (
              <GridListTile
                component="button"
                className="gridbutton"
                key={item.id}
              >
                <img src={item.image} />
                <GridListTileBar
                  style={{
                    backgroundColor: "rgb(81, 190, 120, 0.8)",
                    textAlign: "left",
                  }}
                  title={item.text}
                  subtitle={item.description}
                  className={classes.tileBar}
                />
                <Typography>Go to Course</Typography>
              </GridListTile>
            ))}
          </GridList>
        </div>
      </div>
    </div>
  );
}
