import React from "react";
import styles from "./Grid.module.scss";
import classNames from "classnames";

const Grid = ({ children, gapSize, ...props }) => {
  return (
    <div className={styles.Grid} {...props}>
      {children.map(child => (
        <div
          className={classNames([
            styles.Grid__item,
            {
              [styles.Grid__item_gapLg]: gapSize === "lg",
              [styles.Grid__item_gapSm]: gapSize === "sm"
            }
          ])}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

export default Grid;
