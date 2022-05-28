import React from "react";
import { screen, render } from "./utils/testUtils.js";
import { server } from "./utils/mocks/server.js";
import userEvent from "@testing-library/user-event";
import App from "./App.js";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => {
  server.close();
  window.history.pushState({}, "", "/")
});

describe("App", () => {
  test("renders correctly and is usable", async () => {
    render(<App />);

    // Header and search bar 
    expect(screen.getByRole("link", { name: /reddit pocket/i })).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: /search/i })).toBeInTheDocument();

    // Hotbar
    expect(screen.getByRole("link", { name: /hot/i })).toBeInTheDocument();

    // Sidebar
    expect(screen.getByRole("heading", { name: /popular subreddits/i })).toBeInTheDocument();

    // Post feed and sidebar content should be loading
    expect(screen.getAllByRole("img", { name: /loading/i })[0]).toBeInTheDocument();
    expect(screen.getAllByRole("img", { name: /loading/i })[1]).toBeInTheDocument();

    // Sidebar subreddit links are loaded
    expect(await screen.findByRole("link", { name: /subreddit one/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /subreddit two/i })).toBeInTheDocument();

    // Posts are loaded
    expect(await screen.findByRole("heading", { name: "post one"})).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "post two"})).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "post three"})).toBeInTheDocument();

    // Link to more posts on reddit.com
    expect(screen.getByRole("link", { name: /view more posts/i }))
    .toHaveAttribute("href", expect.stringContaining("https://www.reddit.com/"));

    // Click on post three comment's link
    const user = userEvent.setup();
    await user.click(screen.getByRole("link", { name: "Comments (4.0k)" }));
    expect(window.location.pathname).toMatch("r/subreddit-three/comments/post-three/");

    // Back button shows up
    expect(screen.getByRole("button", { name: /back/i })).toBeInTheDocument();

    // Content should be loading
    expect(screen.getAllByRole("img", { name: /loading/i })[0]).toBeInTheDocument();

    // Hotbar should be gone
    expect(screen.queryByRole("link", { name: /hot/i })).toBeNull();

    // Sidebar should still be there 
    expect(screen.getByRole("heading", { name: /popular subreddits/i })).toBeInTheDocument();

    // Post and comments are loaded
    expect(await screen.findByRole("heading", { name: "post three" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Comments (4.0k)" })).toBeInTheDocument();
    expect(screen.getByText("comment one text")).toBeInTheDocument();
    expect(screen.getByText("comment two text")).toBeInTheDocument();
    expect(screen.getByText("comment three text")).toBeInTheDocument();

    // Link to more comments on reddit.com
    expect(screen.getByRole("link", { name: /view more comments/i }))
    .toHaveAttribute("href", expect.stringContaining(
      "https://www.reddit.com/r/subreddit-three/comments/post-three/"
    ));

    // Type on search bar and click search
    await user.type(screen.getByRole("textbox", { name: /search/i }), "search term");
    await user.click(screen.getByRole("button", { name: /submit/i }));

    // Should now be on search results page
    expect(window.location.href).toMatch(/search\?q=search%20term/i);
    expect(screen.getByRole("heading", { name: /search results/i })).toBeInTheDocument();

    // Back button is there
    expect(screen.getByRole("button", { name: /back/i })).toBeInTheDocument();

    // Posts should be loading
    expect(screen.getAllByRole("img", { name: /loading/i })[0]).toBeInTheDocument();

    // Posts are loaded
    expect(await screen.findByRole("heading", { name: "post one"})).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "post two"})).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "post three"})).toBeInTheDocument();
  });
});
