import React from "react";
import styles from "./index.module.css";
import classNames from "classnames";

export interface SolvedGroupProps {
  groupName: string;
  category: string;
  words: string[];
}

export const SolvedGroup: React.FC<SolvedGroupProps> = ({
  groupName,
  category,
  words
}) => {
  return (
    <section className={classNames(styles.solvedGroup, styles[groupName])}>
      <h3 className={styles.categoryTitle}>{category}</h3>
      <ol className={styles.wordRow}>
        {words.map((word) => (
          <li key={word} className={styles.solvedWord}>
            {word}
          </li>
        ))}
      </ol>
    </section>
  );
};
