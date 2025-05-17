import React from "react";
import styles from "./index.module.css";
import classNames from "classnames";

export interface SquareProps {
  word: string;
  index: number;
  onClick: (word: string) => void;
  isSelected?: boolean;
  isDisabled?: boolean;
}

export const Square: React.FC<SquareProps> = ({
  word,
  index,
  onClick,
  isSelected = false,
  isDisabled = false
}) => {
  const inputId = `word-${index}`;

  const handleChange = () => {
    if (!isDisabled) {
      onClick(word);
    }
  };

  return (
    <div className={styles.squareWrapper}>
      <input
        id={inputId}
        type="checkbox"
        checked={isSelected}
        disabled={isDisabled}
        onChange={handleChange}
        className={styles.inputHidden}
      />
      <label
        htmlFor={inputId}
        className={classNames(styles.square, {
          [styles.selected]: isSelected,
          [styles.disabled]: isDisabled
        })}
      >
        {word}
      </label>
    </div>
  );
};
