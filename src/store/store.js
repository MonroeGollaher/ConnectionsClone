import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "../components/Game/index.slice";

export const store = configureStore({
  reducer: {
    game: gameReducer,
  },
});
