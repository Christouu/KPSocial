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
});
