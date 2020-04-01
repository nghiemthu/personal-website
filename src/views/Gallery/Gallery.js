import React from "react";
import Slideshow from "components/Slide/Slideshow";
import styles from "./Gallery.module.scss";

import GalleryImages from "./GalleryImages/GalleryImages";

const Gallery = () => {
  return (
    <div className={styles.Gallery}>
      <div className={styles.Gallery__intro}>
        <div className={styles.Gallery__intro__description}>
          A record of my life, from my kitchen, daily life to different
          advantures.
        </div>

        <div className={styles.Gallery__intro__hashtag}>#Travelling</div>
        <div className={styles.Gallery__intro__hashtag}>#Cooking</div>
        <div className={styles.Gallery__intro__hashtag}>#Myself</div>
      </div>

      <h4>Featured photos</h4>

      <Slideshow />

      <GalleryImages />
    </div>
  );
};

export default Gallery;
