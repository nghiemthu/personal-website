import React from "react";
import styles from "./OverviewBlock.module.scss";
import classnames from "classnames";

const OverviewBlock = ({ label, number, icon, index, active }) => {
  return (
    <div
      className={classnames([
        styles.OverviewBlock,
        {
          [styles.OverviewBlock_color1_active]: index === 1 && active
        },
        {
          [styles.OverviewBlock_color2_active]: index === 2 && active
        },
        {
          [styles.OverviewBlock_color3_active]: index === 3 && active
        }
      ])}
    >
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
