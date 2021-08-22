import React from "react";

const courseCategories = (props) => {
  console.log("reached here");

  return (
    <>
      {props.state.map((item) => {
        <div>
          <ul>
            <li>{item}</li>
          </ul>
        </div>;
      })}
    </>
  );
};

export default courseCategories;
