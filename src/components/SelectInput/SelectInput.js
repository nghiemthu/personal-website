import React from "react";
import styles from "./SelectInput.module.scss";

const SelectInput = ({ options, id, label, ...props }) => {
  return (
    <div className={styles.SelectInput} {...props}>
      <label htmlFor={id}>{label}</label>
      <select id={id}>
        {options.map(({ value, label }) => (
          <option value={value} key={label}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
