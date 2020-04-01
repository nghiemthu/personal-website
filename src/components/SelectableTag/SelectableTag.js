import React from "react";
import classnames from "classnames";
import styles from "./SelectableTag.module.scss";

const SelectableTag = ({ selected, label, ...props }) => {
  return (
    <div
      {...props}
      className={classnames([
        styles.SelectableTag,
        {
          [styles.SelectableTag_selected]: selected
        }
      ])}
    >
      {label}
    </div>
  );
};

export default SelectableTag;
