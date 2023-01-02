import { render, screen } from "@testing-library/react";
import Register from "./Register";

test("renders Register Page", () => {
  it("Should component be mounted", () => {
    render(<Register />);
  });
});
