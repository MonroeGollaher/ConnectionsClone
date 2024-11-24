import React from "react";
import styles from "./index.module.css";
import { useSelector, useDispatch } from "react-redux";
import { selectMistakesRemaining, decrement } from "./index.slice";
import { Button } from "../../Button";

export const MistakesRemaining = ({
  selectedWords,
  onShuffle,
  onDeselectAll,
  onSubmit,
}) => {
  const dispatch = useDispatch();
  const mistakesRemaining = useSelector(selectMistakesRemaining);

  const handleSubmit = () => {
    if (selectedWords.length === 4) {
      const isCorrect = onSubmit();
      if (!isCorrect) {
        dispatch(decrement());
      }
    } else {
      alert("Please select 4 words to submit.");
    }
  };

  return (
    <section>
      <div className={styles.mistakesRemaining}>
        <p>Mistakes remaining:</p>
        {Array.from({ length: mistakesRemaining }, (_, index) => (
          <span
            key={index}
            style={{
              width: "16px",
              height: "16px",
              borderRadius: "50%",
              backgroundColor: "#5a594e",
              display: "inline-block",
              margin: "0 4px",
            }}
          ></span>
        ))}
      </div>
      <div className={styles.buttonRow}>
        <Button buttonText="Shuffle" onClick={onShuffle} />
        <Button
          buttonText="Deselect All"
          onClick={onDeselectAll}
          disabled={selectedWords.length === 0}
        />
        <Button
          buttonText="Submit"
          onClick={handleSubmit}
          disabled={selectedWords.length !== 4}
        />
      </div>
    </section>
  );
};
