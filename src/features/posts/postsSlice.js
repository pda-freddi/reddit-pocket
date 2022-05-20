import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const getPosts = createAsyncThunk(
  "posts/getPosts",
  async (url) => {
    const response = await fetch(url);
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
      if (action.payload.error) {
        state.fetchFailed = true;
        return;
      }
      // Get posts array from response, extract relevant properties from each post 
      // to a new object and store in state
      let posts = [];
      let postsResponseArray = action.payload.data.children;
      postsResponseArray.forEach(post => {
        if (post.kind !== "t3") return;
        let newPost = {
          author: post.data.author,
          created: post.data.created,
          id: post.data.id,
          isVideo: post.data.is_video,
          link: post.data.permalink,
          media: post.data.media?.reddit_video,
          numOfComments: post.data.num_comments,
          postHint: post.data.post_hint,
          score: post.data.score,
          subreddit: post.data.subreddit_name_prefixed,
          text: post.data.selftext,
          title: post.data.title,
          thumbnail: {
            url: post.data.thumbnail,
            height: post.data.thumbnail_height,
            width: post.data.thumbnail_width
          },
          url: post.data.url
        };
        posts.push(newPost);
      });
      state.posts = [...posts];
    })
  }
});

export { getPosts };
export const selectIsLoading = (state) => state.posts.isLoading;
export const selectFetchFailed = (state) => state.posts.fetchFailed;
export const selectPosts = (state) => state.posts.posts;

export default postsSlice.reducer;
