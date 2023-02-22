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
      <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu_wine flex__center">
          <p className="app__specialMenu-menu_heading">Wine & Beer</p>
          <div className="app__specialMenu_menu_items">
            {data.wines.map((wine, index) => (
              <MenuItem
                key={wine.title + index}
                title={wine.title}
                tags={wine.tags}
                price={wine.price}
              />
            ))}
          </div>
        </div>
        <div className="app__specialMenu-menu_img">
          <img src={images.menu} alt="menu img" />
        </div>
        <div className="app__specialMenu-menu_cocktails flex__center">
          <p className="app__specialMenu-menu_heading">Cocktails</p>
          <div className="app__specialMenu_menu_items">
            {data.cocktails.map((cocktail, index) => (
              <MenuItem
                key={cocktail.title + index}
                title={cocktail.title}
                tags={cocktail.tags}
                price={cocktail.price}
              />
            ))}
          </div>
        </div>
      </div>
      <div style={{ maginTop: "15px" }}>
        <button type="button" className="custom__button">
          View more
        </button>
      </div>
    </div>
  );
};

export default Menu;
