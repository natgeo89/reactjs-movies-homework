import React from "react";
import { render } from "@testing-library/react";
import Button from "../Button";

describe("Button", () => {
  test("snapshot", () => {
    const { asFragment } = render(<Button>Test</Button>);
    expect(asFragment()).toMatchSnapshot();
  });
});
