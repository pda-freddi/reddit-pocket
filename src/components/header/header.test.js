import React from "react";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../app/store.js"
import Header from "./Header.js";

describe("Header component", () => {
  test("it renders correctly", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    // Logo and link to homepage
    expect(screen.getByText("reddit pocket")).toBeInTheDocument();
    expect(screen.getByRole("img", { name: /reddit logo/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /reddit pocket/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /reddit pocket/i }))
    .toHaveAttribute("href", expect.stringContaining("/"));
    // Link to github repository
    expect(screen.getByRole("img", { name: /github logo/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /github/i }))
    .toHaveAttribute("href", expect.stringMatching(/github.com/));
    expect(screen.getByRole("link", { name: /github/i }))
    .toHaveAttribute("target", expect.stringMatching("_blank"));
    // Search bar feature
    expect(screen.getByRole("img", { name: /search/i })).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: /search/i })).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: /search/i })).toHaveValue("");
    // Submit button and clear button should not be present
    expect(screen.queryByRole("button", { name: /submit/i })).toBeNull();
    expect(screen.queryByRole("button", { name: /clear/i })).toBeNull();
  });

  test("search input works correctly", async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    // Click the search icon
    const user = userEvent.setup();
    await user.click(screen.getByRole("img", { name: /search/i }));
    expect(screen.getByRole("textbox", { name: /search/i })).toHaveFocus();
    // Type into search bar
    await user.type(screen.getByRole("textbox", { name: /search/i }), "search term");
    expect(screen.getByRole("textbox", { name: /search/i })).toHaveValue("search term");
    // Submit button and clear button should appear after typing
    expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /clear/i })).toBeInTheDocument();
    // After clicking submit, the input field is cleared
    await user.click(screen.getByRole("button", { name: /submit/i }));
    expect(screen.getByRole("textbox", { name: /search/i })).toHaveValue("");
    // Submit button and clear button should not be present
    expect(screen.queryByRole("button", { name: /submit/i })).toBeNull();
    expect(screen.queryByRole("button", { name: /clear/i })).toBeNull();
    // Test clear button
    await user.type(screen.getByRole("textbox", { name: /search/i }), "search term");
    await user.click(screen.getByRole("button", { name: /clear/i }));
    expect(screen.getByRole("textbox", { name: /search/i })).toHaveValue("");
  });
});
