import React from "react";
import styles from "./ExperienceCard.module.scss";

const ExperienceCard = ({ imgScr, title, company, duration, location }) => {
  return (
    <div className={styles.ExperienceCard}>
      <div className={styles.ExperienceCard__img}>
        <img alt={company} src={imgScr} />
      </div>

      <div className={styles.ExperienceCard__details}>
        <div className={styles.ExperienceCard__details__title}>{title}</div>
        <div>{company}</div>
        <div>{duration}</div>
        <div>{location}</div>
      </div>
    </div>
  );
};

export default ExperienceCard;
