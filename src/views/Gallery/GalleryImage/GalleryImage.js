import React from "react";
import styles from "./GalleryImage.module.scss";

const GalleryImage = ({ imgSrc, time, caption }) => {
  return (
    <div className={styles.GalleryImage}>
      <div className={styles.GalleryImage__wrapper}>
        <img src={imgSrc} alt={caption} />
        <div className={styles.GalleryImage__hoverBackground}></div>

        <div className={styles.GalleryImage__details}>
          <h3>{time}</h3>
          <p>{caption}</p>
        </div>
      </div>
    </div>
  );
};

export default GalleryImage;
