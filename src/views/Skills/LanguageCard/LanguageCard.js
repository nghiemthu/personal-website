import React from "react";
import styles from "./LanguageCard.module.scss";

const LanguageCard = ({ imgScr, language, level }) => {
  return (
    <div className={styles.LanguageCard}>
      <div className={styles.LanguageCard__imageWrapper}>
        <div className={styles.LanguageCard__imageWrapper__image}>
          <img src={imgScr} alt={language} />
        </div>
      </div>

      <div className={styles.LanguageCard__details}>
        <div className={styles.LanguageCard__details__language}>{language}</div>
        <div className={styles.LanguageCard__details__level}>{level}</div>
      </div>
    </div>
  );
};

export default LanguageCard;
