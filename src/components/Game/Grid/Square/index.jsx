import React, { useState } from "react";
import styles from "./index.module.css";
import classNames from "classnames";

export const Square = ({ word = "block", className }) => {
  const [selected, setSelected] = useState(false);

  return (
    <div
      className={classNames(
        className,
        styles.component,
        selected && styles.selected
      )}
      onClick={() => setSelected(!selected)}
    >
      <h2>{word}</h2>
    </div>
  );
};
