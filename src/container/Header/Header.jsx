import React from "react";
import "./Header.css";
import { images } from "../../constants";
import SubHeading from "../../components/SubHeading/SubHeading";
const Header = () => {
  return (
    <div className="app__header  app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <SubHeading title="Chase the new flavour" />
        <h1 className="app__header-h1">The Key to Fine Dining</h1>
        <p style={{ margin: "2rem 0" }} className="p__opensans">
          Sit tellus lobortis sed senectus vivamus molestie. Condimentum
          volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
          aliquam amet tellus
        </p>
        <button type="button" className="custom__button">
          Explore Menu
        </button>
      </div>
      <div className="app__wrapper_img">
        <img src={images.welcome} alt="header" />
      </div>
    </div>
  );
};

export default Header;
