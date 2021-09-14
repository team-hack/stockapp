import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Signup from "../../Signup";
 
describe("Signup component", () => {
  test("pages renders correctly", () => {
    const {queryByLabelText, queryByRole} = render(<Signup/>);
    expect(queryByLabelText("Email")).toBeTruthy();
    expect(queryByLabelText("Password")).toBeTruthy();
    expect(queryByRole("button")).toBeVisible();
    //TODO: check if button is rendered.
  });

  test("page signs in user after signing up", () => {
    render(<Signup/>);
    //TODO: check for email and password inputs
    //TODO: check if user is signed in
  });
});
