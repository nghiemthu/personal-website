import React from "react";
import styles from "./Input.module.scss";

const Input = ({ label, id, ...props }) => {
  return (
    <div className={styles.Input}>
      <label for={id}>{label}</label>
      <input id={id} {...props} />
    </div>
  );
};

export default Input;
