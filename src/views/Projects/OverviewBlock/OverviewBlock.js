import React from "react";
import styles from "./OverviewBlock.module.scss";
import classnames from "classnames";

const OverviewBlock = ({ label, number, icon, index }) => {
  return (
    <div className={styles.OverviewBlock}>
      <div className={styles.OverviewBlock__contentWrapper}>
        <div className={styles.OverviewBlock__contentWrapper__iconWrapper}>
          <div
            className={classnames([
              styles.OverviewBlock__contentWrapper__iconWrapper__icon,
              {
                [styles.OverviewBlock__contentWrapper__iconWrapper__icon_color1]:
                  index === 1
              },
              {
                [styles.OverviewBlock__contentWrapper__iconWrapper__icon_color2]:
                  index === 2
              },
              {
                [styles.OverviewBlock__contentWrapper__iconWrapper__icon_color3]:
                  index === 3
              }
            ])}
          >
            {icon}
          </div>
        </div>

        <div className={styles.OverviewBlock__contentWrapper__content}>
          <div
            className={styles.OverviewBlock__contentWrapper__content__number}
          >
            {number} projects
          </div>
          <div className={styles.OverviewBlock__contentWrapper__content__label}>
            {label}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewBlock;
