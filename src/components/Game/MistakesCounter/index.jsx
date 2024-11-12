import React, { useState } from "react";
import styles from "./index.module.css";

export const MistakesCounter = () => {
  const [mistakesCount, setMistakesCount] = useState(4);

  return (
    <section>
      <p>
        Mistakes remaining:
        {Array.from({ length: mistakesCount }, (_, index) => (
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
      </p>
    </section>
  );
};
