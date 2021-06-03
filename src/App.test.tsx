import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("Stock App in document", () => {
  render(<App />);
  const heading = screen.getByText(/Stock App/i);
  expect(heading).toBeInTheDocument();
});
