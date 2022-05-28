import { rest } from "msw";
import { responseData } from "./responseData.js";

export const handlers = [
  rest.get("https://www.reddit.com/subreddits.json", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(responseData.subreddits)
    );
  }),
  rest.get("https://www.reddit.com/.json", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(responseData.posts)
    );
  }),
  rest.get("https://www.reddit.com/r/subreddit-three/comments/post-three/.json", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(responseData.comments)
    );
  }),
  rest.get("https://www.reddit.com/search.json", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(responseData.posts)
    );
  })
];