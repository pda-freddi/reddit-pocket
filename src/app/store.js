import { configureStore } from "@reduxjs/toolkit";
import subredditsReducer from "../features/subreddits/subredditsSlice.js";
import postsReducer from "../features/posts/postsSlice.js";
import commentsReducer from "../features/comments/commentsSlice.js";
import searchbarReducer from "../features/searchbar/searchbarSlice.js";

export const store = configureStore({
  reducer: {
    subreddits: subredditsReducer,
    posts: postsReducer,
    comments: commentsReducer,
    searchbar: searchbarReducer
  },
});
