import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementMistake } from "./index.slice";
import { Square } from "./components/Square";
import { MistakesRemaining } from "./components/MistakesRemaining";
import { SolvedGroup } from "./components/SolvedGroup";
import { Button } from "../Button";
import styles from "./index.module.css";
import type { RootState, AppDispatch } from "../../store/store";
import type { WordGroup } from "./index.slice";

export const Game: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { mistakesRemaining, isGameOver, wordGroups } = useSelector(
    (state: RootState) => state.game
  );

  const [shuffledWords, setShuffledWords] = useState<string[]>([]);
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [solvedGroups, setSolvedGroups] = useState<WordGroup[]>([]);

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

  const handleWordSelection = (word: string) => {
    setSelectedWords((prevSelected) => {
      if (prevSelected.includes(word)) {
        return prevSelected.filter((w) => w !== word);
      } else if (prevSelected.length < 4) {
        return [...prevSelected, word];
      } else {
        return prevSelected;
      }
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const match = wordGroups.find((group) => {
      const selectedSorted = [...selectedWords].sort().join(",");
      const groupSorted = [...group.words].sort().join(",");
      return selectedSorted === groupSorted;
    });

    if (match) {
      alert(`Correct group: ${match.category}`);
      setSolvedGroups((prev) => [...prev, match]);

      // Remove solved words from the grid
      setShuffledWords((prev) =>
        prev.filter((word) => !selectedWords.includes(word))
      );

      setSelectedWords([]);
    } else {
      console.log("❌ Incorrect group");
      handleMistake();
    }
  };

  return (
    <article className={styles.gameWrapper}>
      {/* Solved Groups Display */}
      <section className={styles.solvedGroups}>
        {solvedGroups.map(({ category, groupName, words }, index) => (
          <SolvedGroup
            key={index}
            category={category}
            groupName={groupName}
            words={words}
          />
        ))}
      </section>

      {/* Grid and Buttons */}
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
          onClick={handleShuffle}
          buttonText="Shuffle"
          type="button"
        />
        <Button
          className={styles.button}
          onClick={handleDeselectAll}
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
