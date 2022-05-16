import { configureStore } from "@reduxjs/toolkit";
import subredditsReducer from "../features/subreddits/subredditsSlice.js";

export const store = configureStore({
  reducer: {
    subreddits: subredditsReducer
  },
});
