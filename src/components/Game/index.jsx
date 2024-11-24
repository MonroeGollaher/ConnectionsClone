import React from "react";
import { Grid } from "./Grid";
import styles from "./index.module.css";
import { Button } from "../Button";

export const Game = () => {
  return (
    <section className={styles.container}>
      <h1>Connections Clone</h1>
      <p>"We have connections at home."</p>
      <div className={styles.gameWrapper}>
        <Grid />
      </div>
    </section>
  );
};
