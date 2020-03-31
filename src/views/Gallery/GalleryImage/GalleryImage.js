import React from "react";
import styles from "./GalleryImage.module.scss";

const GalleryImage = ({ imgSrc, time, caption, ...props }) => {
  return (
    <div className={styles.GalleryImage} {...props}>
      <div className={styles.GalleryImage__wrapper}>
        <img src={imgSrc} alt={caption} />
        <div className={styles.GalleryImage__hoverBackground}></div>
      </div>

      <div className={styles.GalleryImage__details}>
        <div className={styles.GalleryImage__details__time}>{time}</div>
        <h3 className={styles.GalleryImage__details__caption}>{caption}</h3>
      </div>
    </div>
  );
};

export default GalleryImage;
