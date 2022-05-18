import { configureStore } from "@reduxjs/toolkit";
import subredditsReducer from "../features/subreddits/subredditsSlice.js";
import postsReducer from "../features/posts/postsSlice.js";
import commentsReducer from "../features/comments/commentsSlice.js";

export const store = configureStore({
  reducer: {
    subreddits: subredditsReducer,
    posts: postsReducer,
    comments: commentsReducer
  },
});
