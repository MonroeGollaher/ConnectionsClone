import React from "react";
import styles from "./index.module.css";

interface MistakesRemainingProps {
  mistakesRemaining: number;
}

export const MistakesRemaining: React.FC<MistakesRemainingProps> = ({
  mistakesRemaining
}) => {
  return (
    <div className={styles.wrapper}>
      <p>Mistakes Remaining: {mistakesRemaining}</p>
    </div>
  );
};
