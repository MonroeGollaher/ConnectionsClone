import React from "react";
import styles from "./index.module.css";

export const Square = ({ word, index, onClick }) => {
  const id = `inner-card-${index}`;

  const handleClick = () => {
    onClick(word);
  };

  return (
    <label htmlFor={id} className="visually-hidden">
      <input type="checkbox" id={id} onClick={handleClick} />
      {word}
    </label>
  );
};
