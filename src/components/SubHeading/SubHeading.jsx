import React from "react";
import "./subheading.css";
import { images } from "../../constants";
const SubHeading = (props) => {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <img
        src={images.spoon}
        alt="spoon"
        className={`spoon__img  ${props.transform}`}
      />
      <p className="p__cormorant">{props.title}</p>
    </div>
  );
};

export default SubHeading;
