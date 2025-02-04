import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mistakesRemaining: 4,
  isGameOver: false,
  wordGroups: [
    {
      groupName: "yellowGroup",
      category: "Fissure",
      words: ["CRACK", "HOLE", "LEAK", "PUNCTURE"],
    },
    {
      groupName: "greenGroup",
      category: "Elements of writing",
      words: ["LETTER", "PHRASE", "SENTENCE", "WORD"],
    },
    {
      groupName: "blueGroup",
      category: "Instruments you blow into",
      words: ["JUG", "PIPE", "RECORDER", "WHISTLE"],
    },
    {
      groupName: "purpleGroup",
      category: "____ of time",
      words: ["NICK", "PASSAGE", "SANDS", "WASTE"],
    },
  ],
  shuffledWords: [],
  solvedGroups: [],
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    decrementMistake(state) {
      state.mistakesRemaining -= 1;
      if (state.mistakesRemaining === 0) {
        state.isGameOver = true;
      }
    },
    resetGame(state) {
      return {
        ...initialState,
        shuffledWords: Object.values(initialState.words)
          .flatMap((group) => group.words)
          .sort(() => Math.random() - 0.5),
      };
    },
  },
});

export const { decrementMistake, resetGame } = gameSlice.actions;
export default gameSlice.reducer;
