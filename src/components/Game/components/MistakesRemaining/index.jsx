import React from "react";
import styles from "./index.module.css";
export const MistakesRemaining = ({ mistakesRemaining }) => {
  return (
    <section className={styles.wrapper}>
      <span>Mistakes Remaining:</span>
      <div className={styles.dots}>
        {Array(mistakesRemaining)
          .fill(null)
          .map((_, index) => (
            <span key={index} className={styles.dot}></span>
          ))}
      </div>
    </section>
  );
};
