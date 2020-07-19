import React from "react";
import styles from "./Input.module.scss";

const Input = ({ label, id, inputRef, error, ...props }) => {
  return (
    <div className={styles.Input}>
      <label for={id}>{label}</label>
      <input {...props} ref={inputRef} id={id} />

      {error && <div className={styles.Input_error}>{error}</div>}
    </div>
  );
};

export default Input;
