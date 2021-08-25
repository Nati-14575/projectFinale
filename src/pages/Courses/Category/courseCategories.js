import React from "react";
import "./courseCategories.css";

const courseCategories = (props) => {
  return (
    <>
      {props.item.map((item) => (
        <div className="list">
          <ul>
            <li>{item.category}</li>
          </ul>
        </div>
      ))}
    </>
  );
};

export default courseCategories;
