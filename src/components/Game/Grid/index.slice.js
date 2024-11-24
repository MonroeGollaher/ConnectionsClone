import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  words: {
    yellowGroup: {
      category: "Fissure",
      words: ["CRACK", "HOLE", "LEAK", "PUNCTURE"],
    },
    greenGroup: {
      category: "Elements of writing",
      words: ["LETTER", "PHRASE", "SENTENCE", "WORD"],
    },
    blueGroup: {
      category: "Instruments you blow into",
      words: ["JUG", "PIPE", "RECORDER", "WHISTLE"],
    },
    purpleGroup: {
      category: "____ of time",
      words: ["NICK", "PASSAGE", "SANDS", "WASTE"],
    },
  },
};

const gridSlice = createSlice({
  name: "grid",
  initialState,
  reducers: {},
});

export const {} = gridSlice.actions;

export const selectWords = (state) => state.grid.words;

export default gridSlice.reducer;
