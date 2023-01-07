import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navbar from "./Navbar";

describe("test Navbar Component", () => {
  test("test if navbar is in document", () => {
    render(<Navbar />, { wrapper: MemoryRouter });

    const navbar = screen.getByTestId("navbar");
    expect(navbar).toBeInTheDocument();
  });

  test("if left side has 5 items in it", () => {
    render(<Navbar />, { wrapper: MemoryRouter });

    const leftSideItems = screen.getAllByTestId("leftSideItems");
    expect(leftSideItems.length).toBe(5);
  });

  test("if left side span logo is KP S0cial", () => {
    render(<Navbar />, { wrapper: MemoryRouter });

    const logo = screen.getByText("KP Social");
    expect(logo.textContent).toBe("KP Social");
  });

  test("if input at left side is empty", () => {
    render(<Navbar />, { wrapper: MemoryRouter });

    const input = screen.getByPlaceholderText("Search...") as HTMLInputElement;
    expect(input.value).toBe("");
  });

  test("if right side items are 4", () => {
    render(<Navbar />, { wrapper: MemoryRouter });

    const rightSide = screen.getAllByTestId("rightSideItems");
    expect(rightSide.length).toBe(4);
  });
});
