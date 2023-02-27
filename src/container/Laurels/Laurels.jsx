import React from "react";
import "./Laurels.css";
import { images as images, data } from "../../constants";
import { SubHeading, MenuItem } from "../../components";

const AwardCard = (prop) => (
  <div className="app__laurels_awards-card">
    <img src={prop.award.imgUrl} alt="award1" />
    <div className="app__laurels_awards-card_content">
      <p className="p__cormorant" style={{ color: "#dcca87" }}>
        {prop.award.title}
      </p>
      <p className="p__cormorant">{prop.award.subtitle}</p>
    </div>
  </div>
);
const Laurels = () => {
  return (
    <div className="app__bg app__wrapper section__padding" id="awards">
      <div className="app__wrapper_info">
        <SubHeading title="Awards & recognition" />
        <h1 className="headtext__cormorant">Our Laurels</h1>
        <div className="app__laurels_awards">
          {data.awards.map((award, index) => (
            <AwardCard award={award} key={award.title + index} />
          ))}
        </div>
      </div>
      <div className="app__wrapper_img">
        <img src={images.laurels} alt="laurels" />
      </div>
    </div>
  );
};

export default Laurels;
