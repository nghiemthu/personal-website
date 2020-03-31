import React from "react";
import styles from "./PageLoader.module.scss";
import Loader from "components/Loader/Loader";

const PageLoader = () => {
  return (
    <div class={styles.PageLoader}>
      <Loader />
    </div>
  );
};

export default PageLoader;
