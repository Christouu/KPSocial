import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Register from "./Register";

describe("Test Register Page", () => {
  test("Test if heading KP Social is in the document and if its text is KP Social", () => {
    render(<Register />, { wrapper: MemoryRouter });
    const headElement = screen.getByRole("heading", { name: "KP Social" });
    expect(headElement).toBeInTheDocument();
    expect(headElement.textContent).toEqual("KP Social");
  });

  test("Test if span is in the document and it's text is Have an account ?", () => {
    render(<Register />, { wrapper: MemoryRouter });
    const spanElement = screen.getByText("Have an account ?");
    expect(spanElement).toBeInTheDocument();
    expect(spanElement.textContent).toEqual("Have an account ?");
  });

  //make a test po paragraph when I find out what to put in it

  test("Test if button Login is in the document and it's text is Login", () => {
    render(<Register />, { wrapper: MemoryRouter });
    const buttonElement = screen.getByRole("button", { name: "Login" });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement.textContent).toEqual("Login");
  });

  test("Test if heading Register is in the document and it's text is Register", () => {
    render(<Register />, { wrapper: MemoryRouter });
    const buttonElement = screen.getByRole("button", { name: "Register" });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement.textContent).toEqual("Register");
  });

  test("Test if form is in the document", () => {
    render(<Register />, { wrapper: MemoryRouter });
    const buttonElement = screen.getByTestId("form");
    expect(buttonElement).toBeInTheDocument();
  });
});
