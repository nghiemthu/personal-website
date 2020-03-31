import React from "react";
import styles from "./TextArea.module.scss";

const TextArea = ({ label, id, ...props }) => {
  return (
    <div className={styles.TextArea}>
      <label for={id}>{label}</label>
      <textarea id={id} {...props} />
    </div>
  );
};

export default TextArea;
