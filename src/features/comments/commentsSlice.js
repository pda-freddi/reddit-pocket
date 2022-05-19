import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const getComments = createAsyncThunk(
  "comments/getComments",
  async (pathname) => {
    const response = await fetch(`https://www.reddit.com${pathname}.json`);
    const jsonResponse = await response.json();
    return jsonResponse;
  }
);

const initialState = {
  isLoading: false,
  fetchFailed: false,
  post: {},
  comments: []
}

const commentsSlice = createSlice({
  name: "comments",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
    .addCase(getComments.pending, (state) => {
      state.isLoading = true;
      state.fetchFailed = false;
    })
    .addCase(getComments.rejected, (state) => {
      state.isLoading = false;
      state.fetchFailed = true;
    })
    .addCase(getComments.fulfilled, (state, action) => {
      state.isLoading = false;
      if (action.payload.error) {
        state.fetchFailed = true;
        return;
      }
      // Get post object from response, extract relevant properties to a new 
      // object and store in state
      const postResponseObj = action.payload[0].data.children[0].data;
      state.post = {
        title: postResponseObj.title,
        author: postResponseObj.author,
        subreddit: postResponseObj.subreddit_name_prefixed,
        created: postResponseObj.created,
        link: postResponseObj.permalink,
        text: postResponseObj.selftext,
        score: postResponseObj.score,
        id: postResponseObj.id,
        isVideo: postResponseObj.is_video,
        media: postResponseObj.media?.reddit_video,
        numOfComments: postResponseObj.num_comments,
        postHint: postResponseObj.post_hint,
        thumbnail: {
          url: postResponseObj.thumbnail,
          height: postResponseObj.thumbnail_height,
          width: postResponseObj.thumbnail_width
        },
        url: postResponseObj.url
      };
      // Get comments array from response, extract relevant properties from each comment 
      // to a new object and store in state
      let comments = [];
      const commentsResponseArray = action.payload[1].data.children;
      commentsResponseArray.forEach(comment => {
        if (comment.kind !== "t1") return;
        if (comment.data.author === "[deleted]" || comment.data.body === "[deleted]") return;
        let newComment = {
          author: comment.data.author,
          body: comment.data.body,
          created: comment.data.created,
          edited: comment.data.edited,
          id: comment.data.id,
          score: comment.data.score
        };
        comments.push(newComment);
      });
      state.comments = [...comments];
    })
  }
});

export { getComments };
export const selectIsLoading = (state) => state.comments.isLoading;
export const selectFetchFailed = (state) => state.comments.fetchFailed;
export const selectPost = (state) => state.comments.post;
export const selectComments = (state) => state.comments.comments;

export default commentsSlice.reducer;