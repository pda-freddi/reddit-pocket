import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const getSubreddits = createAsyncThunk(
  "subreddits/getSubreddits",
  async () => {
    const response = await fetch("https://www.reddit.com/subreddits.json");
    const jsonResponse = await response.json();
    return jsonResponse;
  }
);

const initialState = {
    isLoading: false,
    fetchFailed: false,
    subreddits: []
  };

const subredditsSlice = createSlice({
  name: "subreddits",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
    .addCase(getSubreddits.pending, (state) => {
      state.isLoading = true;
      state.fetchFailed = false;
    })
    .addCase(getSubreddits.rejected, (state) => {
      state.isLoading = false;
      state.fetchFailed = true;
    })
    .addCase(getSubreddits.fulfilled, (state, action) => {
      state.isLoading = false;
      state.fetchFailed = false;
      if (action.payload.error) {
        state.fetchFailed = true;
        return;
      }
      // Get subreddits array from response, extract relevant properties to 
      // a new subreddit object and store in state
      let subredditsResponseArray = action.payload.data.children;
      let subreddits = [];
      subredditsResponseArray.forEach(subreddit => {
        if (subreddit.kind !== "t5") return;
        let newSubreddit = {
          icon: subreddit.data.icon_img,
          id: subreddit.data.id,
          name: subreddit.data.display_name,
          url: subreddit.data.url
        };
        subreddits.push(newSubreddit);
      });
      state.subreddits = [...subreddits];
    })
  }
});

export { getSubreddits };
export const selectIsLoading = (state) => state.subreddits.isLoading;
export const selectFetchFailed = (state) => state.subreddits.fetchFailed;
export const selectSubreddits = (state) => state.subreddits.subreddits;

export default subredditsSlice.reducer;