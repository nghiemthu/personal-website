import React from "react";
import styles from "./Grid.module.scss";

const Grid = ({ children, ...props }) => {
  return (
    <div className={styles.Grid} {...props}>
      {children}
    </div>
  );
};

export default Grid;
