import React from "react";
import styles from "./Grid.module.scss";
import classNames from "classnames";

const Grid = ({ children, gapSize, columns = 3, ...props }) => {
  return (
    <div
      className={classNames([
        styles.Grid,
        { [styles.Grid_2]: columns === 2, [styles.Grid_3]: columns === 3 }
      ])}
      {...props}
    >
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
