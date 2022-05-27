import React from "react";
import { screen, render } from "../../utils/testUtils.js";
import userEvent from "@testing-library/user-event";
import Header from "./Header.js";

afterAll(() => {
  window.history.pushState({}, null, "/");
});

describe("Header component", () => {
  test("it renders correctly", () => {
    render(<Header />);

    // Logo and link to homepage
    expect(screen.getByText("reddit pocket")).toBeInTheDocument();
    expect(screen.getByRole("img", { name: /reddit logo/i })).toBeInTheDocument();

    const homepageLink = screen.getByRole("link", { name: /reddit pocket/i });
    expect(homepageLink).toHaveAttribute("href", expect.stringContaining("/"));

    // Link to github repository
    expect(screen.getByRole("img", { name: /github logo/i })).toBeInTheDocument();

    const githubLink = screen.getByRole("link", { name: /github/i });
    expect(githubLink).toHaveAttribute("href", expect.stringMatching(/github.com/));
    expect(githubLink).toHaveAttribute("target", expect.stringMatching("_blank"));

    // Search bar feature
    expect(screen.getByRole("img", { name: /search/i })).toBeInTheDocument();

    const input = screen.getByRole("textbox", { name: /search/i });
    expect(input).toHaveValue("");

    // Submit button and clear button should not be present
    expect(screen.queryByRole("button", { name: /submit/i })).toBeNull();
    expect(screen.queryByRole("button", { name: /clear/i })).toBeNull();
  });

  test("search input works correctly", async () => {
    render(<Header />);

    const user = userEvent.setup();
    const searchIcon = screen.getByRole("img", { name: /search/i });
    const input = screen.getByRole("textbox", { name: /search/i });

    // Click the search icon
    await user.click(searchIcon);
    expect(input).toHaveFocus();

    // Type into search bar
    await user.type(input, "search term");
    expect(input).toHaveValue("search term");

    // Submit button and clear button should appear after typing
    expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /clear/i })).toBeInTheDocument();

    // After clicking submit, the input field is cleared
    await user.click(screen.getByRole("button", { name: /submit/i }));
    expect(window.location.href).toMatch(/search\?q=search%20term/i);
    expect(input).toHaveValue("");

    // Submit button and clear button should not be present now
    expect(screen.queryByRole("button", { name: /submit/i })).toBeNull();
    expect(screen.queryByRole("button", { name: /clear/i })).toBeNull();

    // Test clear button
    await user.type(input, "search term 2");
    await user.click(screen.getByRole("button", { name: /clear/i }));
    expect(input).toHaveValue("");
  });
});