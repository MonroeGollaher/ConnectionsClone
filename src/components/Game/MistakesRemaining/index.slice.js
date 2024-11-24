import { createSlice } from "@reduxjs/toolkit";

const initialState = 4;

const mistakesSlice = createSlice({
  name: "mistakesRemaining",
  initialState,
  reducers: {
    decrement: (state) => state - 1,
  },
});

export const { decrement } = mistakesSlice.actions;

export const selectMistakesRemaining = (state) => state.mistakesRemaining;

export default mistakesSlice.reducer;
