import React from "react";
import styles from "./index.module.css";
import classNames from "classnames";

export const Square = ({
  word,
  className,
  isSelected,
  isGrouped,
  backgroundColor,
  onSelect,
}) => {
  return (
    <div
      className={classNames(
        className,
        styles.component,
        isSelected && styles.selected,
        isGrouped && styles.grouped
      )}
      style={{ backgroundColor: backgroundColor || "#f0f0f0" }}
      onClick={() => {
        if (!isGrouped) {
          onSelect(word);
        }
      }}
    >
      <h2>{word}</h2>
    </div>
  );
};
