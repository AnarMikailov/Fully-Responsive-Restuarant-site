import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/gericht.png";
const Links = () => {
  return (
    <div className="app__navbar-links flex__center ">
      <div className="app__navbar__links-link" id="home">
        Home
      </div>
      <div className="app__navbar__links-link" id="Pages">
        Pages
      </div>
      <div className="app__navbar__links-link" id="Contact us">
        Contact us
      </div>
      <div className="app__navbar__links-link" id="Blog">
        Blog
      </div>
      <div className="app__navbar__links-link" id="Landing">
        Landing
      </div>
    </div>
  );
};
const Navbar = () => {
  const [menuIcon, setMenuIcon] = useState(false);
  return (
    <div className="app__navbar">
      <div className="app__navbar-container flex__center">
        <div className="app__navbar-logo">
          <img src={logo} alt="logo" />
        </div>
        <Links />
        <div className="app__navbar-sign__container">
          <div className="app__navbar-sign">Log in / Registration</div>
          <div></div>
          <div className="app__navbar-booktable">Book Table</div>
        </div>
        <div
          onClick={() => {
            setMenuIcon(!menuIcon);
          }}
          className={`app__navbar-menu  ${menuIcon && "slide-bottom"}`}
        >
          <ion-icon name={`${menuIcon ? "close" : "menu"}-outline`}></ion-icon>
        </div>
      </div>
      <div>
        {menuIcon && <div className="app__navbar__menu-container"></div>}
      </div>
    </div>
  );
};

export default Navbar;
