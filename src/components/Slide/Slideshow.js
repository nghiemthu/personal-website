import React, { useEffect } from "react";
import "./Slideshow.scss";
import makeBSS from "./makeBSS";

const opts = {
  auto: {
    speed: 4000,
    pauseOnHover: true
  },
  fullScreen: true,
  swipe: true
};

const Slideshow = () => {
  useEffect(() => {
    makeBSS(".slideshow", opts);
  });

  return (
    <div className="bss-slides slideshow" tabIndex="1" autoFocus="autofocus">
      <figure>
        <img
          src="https://leemark.github.io/better-simple-slideshow/demo/img/medium.jpg"
          alt="leemark"
        />

        <figcaption>
          <div className="photo-label">In feugiat odio rutrum</div>

          <div className="photo-time">August 2019</div>
        </figcaption>
      </figure>
      <figure>
        <img
          src="https://leemark.github.io/better-simple-slideshow/demo/img/colorado.jpg"
          alt="leemark"
        />

        <figcaption>
          <div className="photo-label">Vivamus sodales mi ac lorem</div>

          <div className="photo-time">September 2019</div>
        </figcaption>
      </figure>
    </div>
  );
};

export default Slideshow;
