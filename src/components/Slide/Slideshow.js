import React, { useEffect } from "react";
import "./Slideshow.scss";
import makeBSS from "./makeBSS";

const opts = {
  auto: {
    speed: 4000,
    pauseOnHover: true,
  },
  fullScreen: true,
  swipe: true,
};

const images = [
  {
    imageSrc:
      "https://scontent.fhel1-1.fna.fbcdn.net/v/t1.0-9/33689045_794812440723407_5755760255476695040_o.jpg?_nc_cat=111&_nc_sid=84a396&_nc_ohc=neETHpFpcOkAX8APiP-&_nc_ht=scontent.fhel1-1.fna&oh=c53ffadbab874d0bac2b92820f102ccc&oe=5F39B3BB",
    caption: "Me and my family at Halong",
    date: "May 2018",
  },
  {
    imageSrc:
      "https://scontent.fhel1-1.fna.fbcdn.net/v/t1.0-9/34877848_800530636818254_7143673637189451776_o.jpg?_nc_cat=104&_nc_sid=730e14&_nc_ohc=Ok6DZNNHlggAX9tsMRQ&_nc_ht=scontent.fhel1-1.fna&oh=1a6d02e388edafe4a97fdb7ec905b5fb&oe=5F3931A4",
    caption: "First time at Porvo",
    date: "June 2018",
  },
  {
    imageSrc:
      "https://scontent.fhel1-1.fna.fbcdn.net/v/t1.0-9/45823650_908193959385254_7986142531840638976_o.jpg?_nc_cat=110&_nc_sid=84a396&_nc_ohc=MIM-Ju_RdPcAX-uIknB&_nc_ht=scontent.fhel1-1.fna&oh=68687f98f91e0fe7f044c3234c3d0adc&oe=5F3A770B",
    caption: "Telia React Meetup",
    date: "November 2018",
  },
];

const SlideshowImage = ({ image: { imageSrc, caption, date } }) => {
  return (
    <figure>
      <div className="bssSlides__imageWrapper">
        <img src={imageSrc} alt={caption} />
      </div>

      <figcaption>
        <div className="photo-label">{caption}</div>

        <div className="photo-time">{date}</div>
      </figcaption>
    </figure>
  );
};

const Slideshow = () => {
  useEffect(() => {
    makeBSS(".slideshow", opts);
  });

  return (
    <div className="bss-slides slideshow" tabIndex="1" autoFocus="autofocus">
      {images.map((image) => (
        <SlideshowImage image={image} />
      ))}
    </div>
  );
};

export default Slideshow;
