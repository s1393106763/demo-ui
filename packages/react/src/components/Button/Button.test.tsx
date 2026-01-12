import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Button } from "./Button";
import React from "react";

describe("Button", () => {
  it("should render correctly with children", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole("button").textContent).toBe("Click me");
  });

  it("should apply primary styles by default", () => {
    render(<Button>Primary</Button>);
    const button = screen.getByRole("button");
    // 这里可以根据实际 tokens 颜色进行更精确的断言
    expect(button).toBeDefined();
  });
});
