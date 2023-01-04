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
    const headingRegister = screen.getByRole("button", { name: "Register" });
    expect(headingRegister).toBeInTheDocument();
    expect(headingRegister.textContent).toEqual("Register");
  });

  test("Test if form is in the document", () => {
    render(<Register />, { wrapper: MemoryRouter });
    const form = screen.getByTestId("form");
    expect(form).toBeInTheDocument();
  });

  test("Test if there are 4 input elements adn check their placeholder text", () => {
    render(<Register />, { wrapper: MemoryRouter });
    const inputElements = screen.getAllByTestId("input");
    expect(inputElements).toHaveLength(4);

    const username = screen.getByPlaceholderText(
      "Username"
    ) as HTMLInputElement;
    expect(username.placeholder).toBe("Username");

    const email = screen.getByPlaceholderText("Email") as HTMLInputElement;
    expect(email.placeholder).toBe("Email");

    const password = screen.getByPlaceholderText(
      "Password"
    ) as HTMLInputElement;
    expect(password.placeholder).toBe("Password");

    const name = screen.getByPlaceholderText("Name") as HTMLInputElement;
    expect(name.placeholder).toBe("Name");
  });

  test("Test if form has a button wit htext Register", () => {
    render(<Register />, { wrapper: MemoryRouter });
    const formButton = screen.getByRole("button", { name: "Register" });
    expect(formButton).toBeInTheDocument();
    expect(formButton.textContent).toBe("Register");
  });
});
