import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getSubreddits = createAsyncThunk(
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
      let subredditsResponseArray = action.payload.data.children;
      let subreddits = [];
      subredditsResponseArray.forEach(element => {
        let subreddit = {
          name: element.data.display_name,
          icon: element.data.icon_img,
          id: element.data.id,
          url: element.data.url
        };
        subreddits.push(subreddit);
      });
      state.subreddits = [...subreddits];
    })
  }
});

export const selectSubreddits = (state) => state.subreddits.subreddits;
export const selectIsLoading = (state) => state.subreddits.isLoading;
export const selectFetchFailed = (state) => state.subreddits.fetchFailed;

export default subredditsSlice.reducer;