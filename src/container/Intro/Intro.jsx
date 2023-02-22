import React from "react";
import "./Intro.css";
import { useRef } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { meal } from "../../constants";
import { useState } from "react";
const Intro = () => {
  const vidRef = useRef();
  const [playVideo, setPlayVideo] = useState(false);
  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);
    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };
  return (
    <div className="app__video">
      <video
        ref={vidRef}
        type="video/mp4"
        loop
        controls={false}
        muted
        src={meal}
      ></video>
      <div className="app__video-overlay flex__center">
        <div className="app__video-overlay_circle" onClick={handleVideo}></div>
      </div>
    </div>
  );
};

export default Intro;
