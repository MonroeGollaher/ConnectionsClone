import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementMistake } from "./index.slice";
import { Square } from "./components/Square";
import styles from "./index.module.css";
import { MistakesRemaining } from "./components/MistakesRemaining";
import { Button } from "../Button";

export const Game = () => {
  const dispatch = useDispatch();
  const [shuffledWords, setShuffledWords] = useState([]);
  const [selectedWords, setSelectedWords] = useState([]);
  const { mistakesRemaining, isGameOver, wordGroups } = useSelector(
    (state) => state.game
  );

  useEffect(() => {
    const allWords = wordGroups.flatMap((group) => group.words);
    const shuffled = allWords.sort(() => Math.random() - 0.5);
    setShuffledWords(shuffled);
  }, [wordGroups]);

  useEffect(() => {
    if (mistakesRemaining === 0) {
      setSelectedWords([]);
      window.alert("Better luck next time!");
    }
  }, [mistakesRemaining]);

  const handleMistake = () => {
    if (!isGameOver) {
      dispatch(decrementMistake());
    }
  };

  const handleShuffle = () => {
    const reshuffled = [...shuffledWords].sort(() => Math.random() - 0.5);
    setShuffledWords(reshuffled);
  };

  const handleDeselectAll = () => {
    setSelectedWords([]);
  };

  const handleWordSelection = (word) => {
    setSelectedWords((prevSelected) => {
      if (prevSelected.includes(word)) {
        // Remove the word
        return prevSelected.filter((w) => w !== word);
      } else if (prevSelected.length < 4) {
        // Add the word
        return [...prevSelected, word];
      } else {
        return prevSelected;
      }
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const match = wordGroups.find((group) => {
      const selectedSorted = [...selectedWords].sort().join(",");
      const groupSorted = [...group.words].sort().join(",");
      return selectedSorted === groupSorted;
    });

    if (match) {
      console.log("✅ Correct group:", match.category, match.color);
      setSelectedWords([]);
    } else {
      console.log("❌ Incorrect group");
      handleMistake();
    }
  };

  console.log("mistakesRemaining", mistakesRemaining);

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
              isSelected={selectedWords.includes(word)}
              isDisabled={
                selectedWords.length === 4 && !selectedWords.includes(word)
              }
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
          disabled={selectedWords.length < 4}
        />
      </section>
    </article>
  );
};
