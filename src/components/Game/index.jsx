import React from "react";
import { Grid } from "./Grid";
import styles from "./index.module.css";
import { MistakesCounter } from "./MistakesCounter";
import { Button } from "../Button";

export const Game = () => {
  const handleShuffle = () => {};

  const handleDeselectAll = () => {};

  const handleSubmit = () => {};
  return (
    <section className={styles.container}>
      <h1>Connections Clone</h1>
      <p>"We have connections at home."</p>
      <div className={styles.gameWrapper}>
        <Grid />
        <MistakesCounter />
      </div>
      <div className={styles.buttonRow}>
        <Button buttonText="Shuffle" onClick={handleShuffle} />
        <Button
          buttonText="Deselect All"
          onClick={handleDeselectAll}
          disabled
        />
        <Button buttonText="Submit" onClick={handleSubmit} disabled />
      </div>
    </section>
  );
};
