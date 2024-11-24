import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import mistakesReducer from "../components/Game/MistakesRemaining/index.slice";
import gridReducer from "../components/Game/Grid/index.slice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    mistakesRemaining: mistakesReducer,
    grid: gridReducer,
  },
});
