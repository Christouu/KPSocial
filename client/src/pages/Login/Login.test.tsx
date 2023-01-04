import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Login from "./Login";

describe("Tests for Login Page", () => {
  test("Test if main heading exists and it is KP Social", () => {
    render(<Login />, { wrapper: MemoryRouter });
    const mainHeading = screen.getByTestId("mainHeading");
    expect(mainHeading).toBeInTheDocument();
    expect(mainHeading.textContent).toBe("KP Social");
  });

  //test paragraph when content is going to change to something better

  test("Test if span exists and contains Don't have an account?", () => {
    render(<Login />, { wrapper: MemoryRouter });
    //you can also use regex /don't have an account?/i and its also a better way but for hardcode strings maybe this way is ok maybe
    const span = screen.getByText("Don't have an account?");
    expect(span).toBeInTheDocument();
    expect(span.textContent).toBe("Don't have an account?");
  });

  test("Test if button Register is in the document and it's text is Register", () => {
    render(<Login />, { wrapper: MemoryRouter });
    const buttonElement = screen.getByRole("button", { name: "Register" });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement.textContent).toEqual("Register");
  });

  test("Test if form is in the document", () => {
    render(<Login />, { wrapper: MemoryRouter });
    const form = screen.getByTestId("form");
    expect(form).toBeInTheDocument();
  });

  test("Test if there are 2 input elements adn check their placeholder text", () => {
    render(<Login />, { wrapper: MemoryRouter });
    const inputElements = screen.getAllByTestId("input");
    expect(inputElements).toHaveLength(2);

    const username = screen.getByPlaceholderText(
      "Username"
    ) as HTMLInputElement;
    //here i need as HTMLInputElement cuz it doesnt let me get placeholder prop
    expect(username.placeholder).toBe("Username");

    const password = screen.getByPlaceholderText(
      "Password"
    ) as HTMLInputElement;
    expect(password.placeholder).toBe("Password");
  });

  test("Test if form has a button with text Login", () => {
    render(<Login />, { wrapper: MemoryRouter });
    const formButton = screen.getByRole("button", { name: "Login" });
    expect(formButton).toBeInTheDocument();
    expect(formButton.textContent).toBe("Login");
  });
});
