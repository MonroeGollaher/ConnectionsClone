import { configureStore } from "@reduxjs/toolkit";
import mistakesReducer from "../components/Game/MistakesRemaining/index.slice";
import gridReducer from "../components/Game/Grid/index.slice";

export const store = configureStore({
  reducer: {
    mistakesRemaining: mistakesReducer,
    grid: gridReducer,
  },
});
