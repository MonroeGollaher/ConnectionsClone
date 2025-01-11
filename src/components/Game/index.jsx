import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementMistake, resetGame } from "./index.slice";
import { Square } from "./components/Square";
import styles from "./index.module.css";
import classNames from "classnames";
import { MistakesRemaining } from "./components/MistakesRemaining";
import { Button } from "../Button";

export const Game = () => {
  const dispatch = useDispatch();
  const [shuffledWords, setShuffledWords] = useState([]);
  const { mistakesRemaining, isGameOver, wordGroups } = useSelector(
    (state) => state.game
  );

  useEffect(() => {
    const allWords = wordGroups.flatMap((group) => group.words);
    const shuffled = allWords.sort(() => Math.random() - 0.5);
    setShuffledWords(shuffled);
  }, [wordGroups]);

  const handleMistake = () => {
    if (!isGameOver) {
      dispatch(decrementMistake());
    }
  };

  const handleShuffle = () => {
    console.log("handleShuffle");
  };

  const handleDeselectAll = () => {
    console.log("handleDeselectAll");
  };

  const handleWordSelection = (word, index) => {
    console.log(`Clicked word: ${word}`);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
  };

  return (
    <article className={styles.gameWrapper}>
      <form onSubmit={handleSubmit} id="gameForm">
        <div className={styles.gameGrid}>
          {shuffledWords.map((word, index) => (
            <Square
              key={index}
              word={word}
              index={index}
              onClick={handleWordSelection}
            />
          ))}
        </div>
      </form>
      <MistakesRemaining mistakesRemaining={mistakesRemaining} />
      <section className={styles.buttonWrapper}>
        <Button
          className={styles.button}
          onClick={() => handleShuffle()}
          buttonText="Shuffle"
          type="button"
        />
        <Button
          className={styles.button}
          onClick={() => handleDeselectAll()}
          buttonText="Deselect All"
          type="button"
        />
        <Button
          className={styles.button}
          buttonText="Submit"
          type="submit"
          form="gameForm"
        />
      </section>
    </article>
  );
};
