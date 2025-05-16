import React from "react";
import styles from "./index.module.css";
import classNames from "classnames";

export const Square = ({ word, index, onClick, isSelected, isDisabled }) => {
  const id = `inner-card-${index}`;

  const handleClick = () => {
    onClick(word);
  };

  return (
    <label
      htmlFor={id}
      className={classNames(
        styles.square,
        {
          [styles.selected]: isSelected,
          [styles.disabled]: isDisabled
        },
        "visually-hidden"
      )}
    >
      <input
        type="checkbox"
        id={id}
        onClick={handleClick}
        disabled={isDisabled}
      />
      {word}
    </label>
  );
};
