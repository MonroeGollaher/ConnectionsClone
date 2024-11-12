import React from "react";
import { Grid } from "./Grid";
import styles from "./index.module.css";

export const Game = () => {
  return (
    <div className={styles.container}>
      <h1>Connections Clone</h1>
      <p>"We have connections at home."</p>
      <Grid />
    </div>
  );
};
