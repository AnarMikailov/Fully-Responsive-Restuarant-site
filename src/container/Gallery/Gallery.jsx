import React from "react";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Gallery.css";

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p
          className="p__opensans"
          style={{ color: "#AAAAAA", marginTop: "2rem" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
          mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>
        <button type="button" className="custom__button">
          View More
        </button>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {[
            images.gallery01,
            images.gallery02,
            images.gallery03,
            images.gallery04,
          ].map((image, index) => (
            <div
              className="app__gallery-images_card flex__center"
              key={`gallery_image-${index + 1}`}
            >
              <img src={image} alt="gallery_image" />
              <BsInstagram className="gallery__image-icon" />
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort
            className="gallery__arrow-icon"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="gallery__arrow-icon"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;

//Implementing Gallery second way

// import React, { useState } from "react";
// import "./Gallery.css";
// import { images } from "../../constants";
// import { SubHeading } from "../../components";
// import {
//   BsInstagram,
//   BsArrowLeftShort,
//   BsArrowRightShort,
// } from "react-icons/bs";
// const Gallery = () => {
//   const [move, setMove] = useState(0);
//   const HandleLeftClick = () => {
//     if (move != 0) {
//       setMove((prevMove) => prevMove + 50);
//     }
//     console.log(move);
//   };
//   const HandleRightClick = () => {
//     if (move != -100) {
//       setMove((prevMove) => prevMove - 50);
//     }
//     console.log(move);
//   };

//   return (
//     <div className="app__gallery app__bg app__wrapper section__padding ">
//       <div className="app__gallery-content app__wrapper_info">
//         <p className="p__cormorant">Instagram</p>
//         <SubHeading />

//         <h1 className="headtext__cormorant">Photo Gallery</h1>
//         <p className="p__opensans" style={{ marginTop: "2rem" }}>
//           Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Volutpat
//           Mattis Ipsum Turpis Elit Elit Scelerisque Egestas Mu.
//         </p>

//         <button type="button" className="custom__button">
//           View More
//         </button>
//       </div>
//       <div className="app__gallery-images app__wrapper_img ">
//         <button className="custom__button btnlft" onClick={HandleLeftClick}>
//           Left
//         </button>
//         <div
//           className="app__gallery__images-box "
//           style={{ transform: `translateX(${move}%)`, transition: "1s all" }}
//         >
//           <img src={images.gallery01} alt="gallery" />
//           <img src={images.gallery02} alt="gallery" />
//           <img src={images.gallery03} alt="gallery" />
//           <img src={images.gallery04} alt="gallery" />
//         </div>
//         <button className="custom__button btnrght" onClick={HandleRightClick}>
//           Right
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Gallery;
