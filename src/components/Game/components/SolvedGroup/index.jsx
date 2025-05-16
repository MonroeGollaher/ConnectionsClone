import React from "react";
import styles from "./index.module.css";
import classNames from "classnames";

export const SolvedGroup = ({ groupName, category, words }) => {
  return (
    <section className={classNames(styles.solvedGroup, styles[groupName])}>
      <h3 className={styles.categoryTitle}>{category}</h3>
      <div className={styles.wordRow}>
        {words.map((word) => (
          <span key={word} className={styles.solvedWord}>
            {word}
          </span>
        ))}
      </div>
    </section>
  );
};
