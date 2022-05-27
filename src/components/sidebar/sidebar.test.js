import React from "react";
import { screen, render } from "../../utils/testUtils.js";
import { server } from "../../utils/mocks/server.js";
import Sidebar from "./Sidebar.js";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Sidebar component", () => {
  test("renders loading state", () => {
    render(<Sidebar />);

    expect(screen.getByRole("heading", { name: /popular subreddits/i })).toBeInTheDocument();
    expect(screen.getByRole("img", { name: /loading/i })).toBeInTheDocument();

    // no error message should be present
    expect(screen.queryByText(/something went wrong/i)).toBeNull();
  });

  test("renders error message if fetch fails", async () => {
    // mock fetch with error response
    jest.spyOn(global, "fetch").mockImplementationOnce(() => {
      return Promise.reject(new Error("fetch failed"));
    });

    render(<Sidebar />);

    expect(fetch).toHaveBeenCalledWith("https://www.reddit.com/subreddits.json");
    expect(await screen.findByText(/something went wrong/i)).toBeInTheDocument();

    // loading animation should not be present anymore
    expect(screen.queryByRole("img", { name: /loading/i })).toBeNull();

    jest.restoreAllMocks();
  });

  test("renders subreddit links", async () => {
    render(<Sidebar />);
    
    const subredditLinkOne = await screen.findByRole("link", { name: /subreddit one/i });
    expect(subredditLinkOne).toHaveAttribute("href", expect.stringContaining("/r/subreddit-one/"));

    const subredditLinkTwo = await screen.findByRole("link", { name: /subreddit two/i });
    expect(subredditLinkTwo).toHaveAttribute("href", expect.stringContaining("/r/subreddit-two/"));
    
    // no loading animation or error message should be present
    expect(screen.queryByRole("img", { name: /loading/i })).toBeNull();
    expect(screen.queryByText(/something went wrong/i)).toBeNull();
  });
});

