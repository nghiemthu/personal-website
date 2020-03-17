import React, { useEffect } from "react";
import "./Slideshow.scss";
import makeBSS from "./makeBSS";

const opts = {
  auto: {
    speed: 5000,
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
          "Medium" by{" "}
          <a href="https://www.flickr.com/photos/thomashawk/14586158819/">
            Thomas Hawk
          </a>
          .
        </figcaption>
      </figure>
      <figure>
        <img
          src="https://leemark.github.io/better-simple-slideshow/demo/img/colorado.jpg"
          alt="leemark"
        />

        <figcaption>
          "Colorado" by{" "}
          <a href="https://www.flickr.com/photos/stuckincustoms/88370744">
            Trey Ratcliff
          </a>
          .
        </figcaption>
      </figure>
    </div>
  );
};

export default Slideshow;
