import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getPosts = createAsyncThunk(
  "posts/getPosts",
  async (pathname, thunkAPI) => {
    const response = await fetch(`https://www.reddit.com${pathname}.json`);
    const jsonResponse = await response.json();
    return jsonResponse;
  }
);

const initialState = {
  isLoading: false,
  fetchFailed: false,
  posts: []
}

const postsSlice = createSlice({
  name: "posts",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
    .addCase(getPosts.pending, (state) => {
      state.isLoading = true;
      state.fetchFailed = false;
    })
    .addCase(getPosts.rejected, (state) => {
      state.isLoading = false;
      state.fetchFailed = true;
    })
    .addCase(getPosts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.fetchFailed = false;
      let postsResponseArray = action.payload.data.children;
      let posts = [];
      postsResponseArray.forEach(element => {
        let post = {
          title: element.data.title,
          author: element.data.author,
          subreddit: element.data.subreddit_name_prefixed,
          created: element.data.created,
          link: element.data.permalink,
          text: element.data.selftext,
          score: element.data.score,
          id: element.data.id,
          isVideo: element.data.is_video,
          media: element.data.media?.reddit_video,
          numOfComments: element.data.num_comments,
          postHint: element.data.post_hint,
          thumbnail: {
            url: element.data.thumbnail,
            height: element.data.thumbnail_height,
            width: element.data.thumbnail_width
          },
          url: element.data.url
        };
        posts.push(post);
      });
      state.posts = [...posts];
    })
  }
});

export const selectPosts = (state) => state.posts.posts;
export const selectIsLoading = (state) => state.posts.isLoading;
export const selectFetchFailed = (state) => state.posts.fetchFailed;

export default postsSlice.reducer;
