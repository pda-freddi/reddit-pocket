import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Hotbar from "./Hotbar.js";

describe("Hotbar component", () => {
  test("it renders correctly", () => {
    render(
      <BrowserRouter>
        <Hotbar />
      </BrowserRouter>
    );
    // Hot section
    expect(screen.getByRole("link", { name: /hot/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /hot/i }))
    .toHaveAttribute("href", expect.stringContaining("/hot"));
    expect(screen.getByRole("img", { name: /fire/i })).toBeInTheDocument();
    expect(screen.getByRole("img", { name: /fire/i })).toHaveClass("icon");
    // Top voted section
    expect(screen.getByRole("link", { name: /top/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /top/i }))
    .toHaveAttribute("href", expect.stringContaining("/top"));
    expect(screen.getByRole("img", { name: /top/i })).toBeInTheDocument();
    expect(screen.getByRole("img", { name: /top/i })).toHaveClass("icon");
    // Rising section
    expect(screen.getByRole("link", { name: /rising/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /rising/i }))
    .toHaveAttribute("href", expect.stringContaining("/rising"));
    expect(screen.getByRole("img", { name: /rising/i })).toBeInTheDocument();
    expect(screen.getByRole("img", { name: /rising/i })).toHaveClass("icon");
    // New section
    expect(screen.getByRole("link", { name: /recent/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /recent/i }))
    .toHaveAttribute("href", expect.stringContaining("/new"));
    expect(screen.getByRole("img", { name: /new/i })).toBeInTheDocument();
    expect(screen.getByRole("img", { name: /new/i })).toHaveClass("icon");
  });
});