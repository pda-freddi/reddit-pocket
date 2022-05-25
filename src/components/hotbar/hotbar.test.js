import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Hotbar from "./Hotbar.js";

test("it renders correctly in root path", () => {
    render(
      <BrowserRouter>
        <Hotbar />
      </BrowserRouter>
    );
    expect(screen.getByText("Hot")).toBeInTheDocument();
    expect(screen.getByText("Hot")).toHaveAttribute("href", expect.stringContaining("/hot"));
    expect(screen.getByAltText("fire icon")).toBeInTheDocument();
    expect(screen.getByAltText("fire icon")).toHaveClass("icon");
});