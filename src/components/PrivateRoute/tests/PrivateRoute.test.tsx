import App from "../../../App";
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { render, screen } from "@testing-library/react";

describe("PrivateRoute component", () => {
  test("Route should redirect to the Signup page if not logged in", () => {
    render(<App />, { wrapper: MemoryRouter })

    const leftClick = { button: 0 }
    userEvent.click(screen.getByText(/protected/i), leftClick)

    expect(screen.getByRole("heading")).toHaveTextContent(/signup/i);
    expect(screen.getByText(/some content goes here/i)).toBeInTheDocument();
  });
});
