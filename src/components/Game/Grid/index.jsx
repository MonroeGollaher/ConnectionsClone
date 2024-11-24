import React, { useState } from "react";
import { Square } from "./Square";
import styles from "./index.module.css";
import { useSelector } from "react-redux";
import { selectWords } from "./index.slice";
import { MistakesRemaining } from "../MistakesRemaining";
export const Grid = () => {
  const words = useSelector(selectWords);

  const allWords = Object.values(words).flatMap((group) => group.words);

  const shuffleArray = (array) => {
    return array
      .map((word) => ({ word, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ word }) => word);
  };

  const [selectedWords, setSelectedWords] = useState([]);
  const [groupedWords, setGroupedWords] = useState([]);
  const [shuffledWords, setShuffledWords] = useState(
    shuffleArray(allWords.filter((word) => !groupedWords.includes(word)))
  );

  const handleSelect = (word) => {
    setSelectedWords((prevSelected) => {
      if (prevSelected.includes(word)) {
        // Deselect
        return prevSelected.filter((w) => w !== word);
      } else if (prevSelected.length < 4) {
        // Select
        return [...prevSelected, word];
      }
      return prevSelected;
    });
  };

  const checkCorrectSelection = () => {
    const group = Object.values(words).find(
      (group) =>
        group.words.every((word) => selectedWords.includes(word)) &&
        selectedWords.every((word) => group.words.includes(word))
    );

    return group ? group.category : null;
  };

  const handleSubmit = () => {
    const category = checkCorrectSelection();

    if (category) {
      alert(`Correct! You found the group: ${category}`);
      const newGroup = {
        category,
        words: [...selectedWords],
      };

      setGroupedWords((prev) => [...prev, newGroup]);
      setShuffledWords((prev) =>
        prev.filter((word) => !selectedWords.includes(word))
      );
      // Reset selections
      setSelectedWords([]);
    } else {
      alert("Incorrect! Try again.");
    }
    return !!category;
  };

  const handleShuffle = () => {
    setShuffledWords(
      shuffleArray(
        allWords.filter(
          (word) => !groupedWords.flatMap((g) => g.words).includes(word)
        )
      )
    );
    // Reset selections
    setSelectedWords([]);
  };

  const handleDeselectAll = () => {
    setSelectedWords([]);
  };

  const getCategoryColor = (category) => {
    switch (category) {
      // TODO: move this somewhere else to make more dynamic when I start porting in words dynamically instead of hardcoding in slices
      case "Fissure":
        return "#f9df6d"; // Yellow
      case "Elements of writing":
        return "#a0c35a"; // Green
      case "Instruments you blow into":
        return "#b0c4ef"; // Blue
      case "____ of time":
        return "#ba81c5"; // Purple
      default:
        return "#ffffff";
    }
  };

  return (
    <div>
      {groupedWords &&
        groupedWords.map((group, index) => (
          <section
            className={styles.groupedWordsContainer}
            style={{ backgroundColor: getCategoryColor(group.category) }}
            key={index}
          >
            <h3>{group.category.toUpperCase()}</h3>
            <ul>
              {group.words.map((word, wordIndex) => (
                <li key={wordIndex}>
                  {word}
                  {wordIndex < group.words.length - 1 && ","}{" "}
                </li>
              ))}
            </ul>
          </section>
        ))}
      {/* Display Remaining Words in Grid */}
      <div className={styles.gridContainer}>
        {shuffledWords.map((word, index) => (
          <Square
            key={index}
            word={word}
            className={styles.gridItem}
            isSelected={selectedWords.includes(word)}
            onSelect={handleSelect}
          />
        ))}
      </div>
      <MistakesRemaining
        selectedWords={selectedWords}
        onShuffle={handleShuffle}
        onDeselectAll={handleDeselectAll}
        onSubmit={handleSubmit}
      />
    </div>
  );
};
