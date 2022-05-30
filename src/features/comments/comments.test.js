import React from "react";
import { screen, render } from "../../utils/testUtils.js";
import { server } from "../../utils/mocks/server.js"
import Comments from "./Comments.js"

beforeAll(() => {
  server.listen();
  // set href to a path that displays comments
  window.history.pushState({}, "", "r/subreddit-three/comments/post-three/");
});

afterEach(() => server.resetHandlers());

afterAll(() => {
  server.close();
  window.history.pushState({}, "", "/");
});

describe("comments feature", () => {
  test("renders error message if fetch fails", async () => {
    // mock fetch with error response
    jest.spyOn(global, "fetch").mockImplementationOnce(() => {
      return Promise.reject(new Error("fetch failed"));
    });

    render(<Comments />);

    // Back button and loading animation
    expect(screen.getByRole("button", { name: /back/i })).toBeInTheDocument();
    expect(screen.getByRole("img", { name: /loading/i })).toBeInTheDocument();

    expect(fetch).toHaveBeenCalledWith("https://www.reddit.com/r/subreddit-three/comments/post-three/.json");
    expect(await screen.findByText(/something went wrong/i)).toBeInTheDocument();

    // loading animation should not be present anymore
    expect(screen.queryByRole("img", { name: /loading/i })).toBeNull();
    // Back button still there
    expect(screen.getByRole("button", { name: /back/i })).toBeInTheDocument();

    jest.restoreAllMocks();
  });

  test("fetch and render post and comments", async () => {
    render(<Comments />);

    // Back button and loading animation
    expect(screen.getByRole("button", { name: /back/i })).toBeInTheDocument();
    expect(screen.getByRole("img", { name: /loading/i })).toBeInTheDocument();

    // Post three is rendered
    expect(await screen.findByRole("heading", { name: "post three" })).toBeInTheDocument();
    expect(screen.getByText("r/subreddit three")).toBeInTheDocument();
    expect(screen.getByText("24.9k")).toBeInTheDocument();
    expect(screen.getByText("This is post text")).toBeInTheDocument();
    expect(screen.getByText("Author: author three")).toBeInTheDocument();
    
    // Comments section heading
    expect(screen.getByRole("heading", { name: "Comments (4.0k)" })).toBeInTheDocument();

    // First comment
    expect(screen.getByText("comment author one")).toBeInTheDocument();
    expect(screen.getByText("comment one text")).toBeInTheDocument();
    expect(screen.getByText("540")).toBeInTheDocument();

    // Third comment
    expect(screen.getByText("comment author three")).toBeInTheDocument();
    expect(screen.getByText("comment three text")).toBeInTheDocument();
    expect(screen.getByText(/edited/i)).toBeInTheDocument();
    expect(screen.getByText("125")).toBeInTheDocument();

    // Link to more comments on reddit.com
    expect(screen.getByRole("link", { name: /view more comments/i }))
    .toHaveAttribute("href", expect.stringContaining(
      "https://www.reddit.com/r/subreddit-three/comments/post-three/"
    ));

    // no loading animation or error messages
    expect(screen.queryByRole("img", { name: /loading/i })).toBeNull();
    expect(screen.queryByText(/something went wrong/i)).toBeNull();
    // Back button still there
    expect(screen.getByRole("button", { name: /back/i })).toBeInTheDocument();
  });
});