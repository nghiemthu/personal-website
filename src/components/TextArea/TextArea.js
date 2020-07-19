import React from "react";
import styles from "./TextArea.module.scss";

const TextArea = ({ label, id, error, inputRef, ...props }) => {
  return (
    <div className={styles.TextArea}>
      <label htmlFor={id}>{label}</label>
      <textarea id={id} ref={inputRef} {...props} />

      {error && <div className={styles.TextArea_error}>{error}</div>}
    </div>
  );
};

export default TextArea;
