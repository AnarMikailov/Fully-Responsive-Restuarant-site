import React from "react";
import "./Menu.css";
import { images, data } from "../../constants";
import { SubHeading, MenuItem } from "../../components";
const Menu = () => {
  return (
    <div className="app__specialMenu flex__center section__padding" id="menu">
      <div className="app_specialMenu-title">
        <SubHeading title="Menu that fits you palatte" />
        <h1 className="headtext__cormorant">Today's special</h1>
      </div>
    </div>
  );
};

export default Menu;
