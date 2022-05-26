import React from "react";
import { render, screen } from "../../utils/testUtils.js";
import Hotbar from "./Hotbar.js";

describe("Hotbar component", () => {
  test("it renders correctly", () => {
    render(<Hotbar />);
    // Hot section
    const hotLink = screen.getByRole("link", { name: /hot/i });
    expect(hotLink).toHaveAttribute("href", expect.stringContaining("/hot"));

    const fireIcon = screen.getByRole("img", { name: /fire/i });
    expect(fireIcon).toHaveClass("icon");

    // Top voted section
    const topLink = screen.getByRole("link", { name: /top/i });
    expect(topLink).toHaveAttribute("href", expect.stringContaining("/top"));

    const topIcon = screen.getByRole("img", { name: /top/i });
    expect(topIcon).toHaveClass("icon");

    // Rising section
    const risingLink = screen.getByRole("link", { name: /rising/i });
    expect(risingLink).toHaveAttribute("href", expect.stringContaining("/rising"));

    const risingIcon = screen.getByRole("img", { name: /rising/i });
    expect(risingIcon).toHaveClass("icon");
    
    // New section
    const newLink = screen.getByRole("link", { name: /recent/i });
    expect(newLink).toHaveAttribute("href", expect.stringContaining("/new"));

    const newIcon = screen.getByRole("img", { name: /new/i });
    expect(newIcon).toHaveClass("icon");
  });
});