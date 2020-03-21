import React, { useState } from "react";
import styles from "./AbilityCard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import classnames from "classnames";

const AbilityCard = ({ imgScr, label, technologies = [] }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={classnames([styles.AbilityCard])}
      onMouseEnter={() => setIsHovered(false)}
      onMouseLeave={() => setIsHovered(true)}
    >
      <div className={styles.AbilityCard__image}>
        <img src={imgScr} alt={label} />
      </div>

      <div className={styles.AbilityCard__label}>{label}</div>

      <div className={styles.AbilityCard__technologies}>
        {technologies.map(icon => (
          <FontAwesomeIcon
            className={classnames(styles.AbilityCard__technologies__icon, {
              [styles.AbilityCard_noDelay]: isHovered
            })}
            icon={icon}
          />
        ))}
      </div>
    </div>
  );
};

export default AbilityCard;
