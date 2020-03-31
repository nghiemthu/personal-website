import React from "react";
import styles from "./Loader.module.scss";

const Loader = () => {
  return (
    <div class={styles.Loader}>
      <div class={styles.Loader__fill}></div>
    </div>
  );
};

export default Loader;
