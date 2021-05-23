import React from "react";
import { render, screen } from "@testing-library/react";
import { Page } from "../../Page";

describe("my test", () => {
  test("page renders with default heading and default content", () => {
    render(<Page />);

    expect(screen.getByRole("heading")).toHaveTextContent(/default page/i);
    expect(screen.getByText("Hello World")).toHaveTextContent(/hello world/i);
  });

  test("page renders with correct props supplied", () => {
    const props = {
      title: "Main Page",
      content: "Welcome to my website",
    };

    render(<Page title={props.title} content={props.content} />);

    expect(screen.getByRole("heading")).toHaveTextContent(/main page/i);
    expect(screen.getByText(/welcome to/i)).toHaveTextContent(
      /welcome to my website/i
    );
  });
});
