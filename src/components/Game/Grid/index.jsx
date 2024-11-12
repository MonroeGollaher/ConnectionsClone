import React from "react";
import { Square } from "./Square";
import styles from "./index.module.css";

export const Grid = () => {
  return (
    <div className={styles.gridContainer}>
      {Array.from({ length: 16 }, (_, index) => (
        <Square key={index} className={styles.gridItem} />
      ))}
    </div>
  );
};
