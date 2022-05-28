import React from "react";
import { render, screen } from "../../utils/testUtils.js";
import { server } from "../../utils/mocks/server.js";
import Posts from "./Posts.js";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("posts feature", () => {
  test("renders error message if fetch fails", async () => {
    // mock fetch with error response
    jest.spyOn(global, "fetch").mockImplementationOnce(() => {
      return Promise.reject(new Error("fetch failed"));
    });

    render(<Posts />);

    expect(screen.getByRole("img", { name: /loading/i })).toBeInTheDocument();
    expect(fetch).toHaveBeenCalledWith("https://www.reddit.com/.json");
    expect(await screen.findByText(/something went wrong/i)).toBeInTheDocument();

    // loading animation should not be present anymore
    expect(screen.queryByRole("img", { name: /loading/i })).toBeNull();

    jest.restoreAllMocks();
  });

  test("renders posts correctly", async () => {
    render(<Posts />);

    expect(screen.getByRole("img", { name: /loading/i })).toBeInTheDocument();
    // Post one (image)
    expect(await screen.findByRole("heading", { name: "post one"})).toBeInTheDocument();
    expect(screen.getByText("r/subreddit one")).toBeInTheDocument();
    expect(screen.getByText("15.0k")).toBeInTheDocument();
    expect(screen.getByRole("img", { name: /post media/i })).toBeInTheDocument();
    expect(screen.getByText(/author one/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Comments (150)" }))
    .toHaveAttribute("href", expect.stringContaining("r/subreddit-one/comments/post-one/"));

    // Post two (video)
    expect(screen.getByRole("heading", { name: "post two"})).toBeInTheDocument();
    expect(screen.getByText("r/subreddit two")).toBeInTheDocument();
    expect(screen.getByText("48.1k")).toBeInTheDocument();
    // video source element
    expect(screen.getByTestId("456tv"))
    .toHaveAttribute("src", expect.stringContaining("https://video.com"));
    // audio source element
    expect(screen.getByTestId("456ta"))
    .toHaveAttribute("src", expect.stringContaining("https://video.com/DASH_audio.mp4"));

    expect(screen.getByText(/author two/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Comments (8.5k)" }))
    .toHaveAttribute("href", expect.stringContaining("r/subreddit-two/comments/post-two/"));

    // Post three (text)
    expect(screen.getByRole("heading", { name: "post three" })).toBeInTheDocument();
    expect(screen.getByText("r/subreddit three")).toBeInTheDocument();
    expect(screen.getByText("24.9k")).toBeInTheDocument();
    expect(screen.getByText("This is post text")).toBeInTheDocument();
    expect(screen.getByText(/author three/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Comments (4.0k)" }))
    .toHaveAttribute("href", expect.stringContaining("r/subreddit-three/comments/post-three/"));

    // Link to more posts on reddit.com
    expect(screen.getByRole("link", { name: /view more posts/i }))
    .toHaveAttribute("href", expect.stringContaining("https://www.reddit.com/"));

    // No error message or loading animation present
    expect(screen.queryByText(/something went wrong/i)).toBeNull();
    expect(screen.queryByRole("img", { name: /loading/i })).toBeNull();
  });
});
