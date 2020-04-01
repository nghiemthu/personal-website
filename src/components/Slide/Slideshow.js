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

const images = [
  {
    imageSrc:
      "https://scontent.fqlf1-1.fna.fbcdn.net/v/t1.0-9/89470096_1241930716011575_1472870008081088512_o.jpg?_nc_cat=109&_nc_sid=dd9801&_nc_ohc=mE79wc1RKZsAX_LjK6E&_nc_ht=scontent.fqlf1-1.fna&oh=f64ef548fd25f3bb0aeab01d06715aba&oe=5EAA4B8E",
    caption: "Me and my family at Halong",
    date: "May 2018"
  },
  {
    imageSrc:
      "https://scontent.fqlf1-1.fna.fbcdn.net/v/t1.0-9/34877848_800530636818254_7143673637189451776_o.jpg?_nc_cat=104&_nc_sid=8024bb&_nc_ohc=HNgt-Y8OngEAX9AUzQW&_nc_ht=scontent.fqlf1-1.fna&oh=4f08ae60178d935c21451633d019ec27&oe=5EAACFA4",
    caption: "First time at Porvo",
    date: "June 2018"
  },
  {
    imageSrc:
      "https://scontent.fqlf1-1.fna.fbcdn.net/v/t1.0-9/47032380_917861311751852_7385640824651907072_o.jpg?_nc_cat=111&_nc_sid=dd7718&_nc_ohc=GbHXqLz0gE4AX__c-cL&_nc_ht=scontent.fqlf1-1.fna&oh=2ce2e001c03d5592ef553299a1ef3c33&oe=5EA94869",
    caption: "Telia React Meetup",
    date: "November 2018"
  }
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
      {images.map(image => (
        <SlideshowImage image={image} />
      ))}
    </div>
  );
};

export default Slideshow;
