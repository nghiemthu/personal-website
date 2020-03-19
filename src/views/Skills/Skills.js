import React from "react";
import styles from "./Skills.module.scss";
import thunghiemPhoto from "resources/images/homepage/thunghiem.png";

const Skills = () => {
  return (
    <div className={styles.Skills}>
      <div className={styles.Skills__intro}>
        <img src={thunghiemPhoto} alt="thunghiem" />
        <h3>Thu Nghiem Dinh</h3>
        <div>Software developer</div>
      </div>

      <div className={styles.Skills__skills}></div>

      <div className={styles.Skills__experience}></div>
    </div>
  );
};

export default Skills;
