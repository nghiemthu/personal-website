import React from "react";
import styles from "./HomeCard.module.scss";

const HomeCard = ({ imgSrc, title, description }) => {
  return (
    <div className={styles.HomeCard}>
      <div className={styles.HomeCard__image}>
        <img src={imgSrc} alt="panel-img" />
      </div>
      <h5 className={styles.HomeCard__label}>{title}</h5>
      <p className={styles.HomeCard__description}>{description}</p>
    </div>
  );
};

export default HomeCard;
