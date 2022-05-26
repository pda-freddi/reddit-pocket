import React from "react";
import { screen, render } from "../../utils/testUtils.js";
import Sidebar from "./Sidebar.js";

/* TODO: Add msw library to mock fetch requests and add test case of error message
if there's a network fail or no subreddits to show */

describe("Sidebar component", () => {
  test("it renders loading state", () => {
    render(<Sidebar />);

    expect(screen.getByRole("heading", { name: /popular subreddits/i })).toBeInTheDocument();
    expect(screen.getByRole("img", { name: /loading/i })).toBeInTheDocument();
  });
  test("it render subreddits links", async () => {
    render(<Sidebar />);
    
    const homeSubredditLink = await screen.findByRole("link", { name: /home/i });
    expect(homeSubredditLink).toBeInTheDocument();
    expect(homeSubredditLink).toHaveAttribute("href", expect.stringContaining("/r/Home"));

    const funnySubredditLink = screen.getByRole("link", { name: /funny/i });
    expect(funnySubredditLink).toBeInTheDocument();
    expect(funnySubredditLink).toHaveAttribute("href", expect.stringContaining("/r/funny"));

    expect(screen.queryByRole("img", { name: /loading/i })).toBeNull();
  });
});

