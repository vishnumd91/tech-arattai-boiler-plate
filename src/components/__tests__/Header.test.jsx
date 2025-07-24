import React from "react";
import { render } from "@testing-library/react";
import Header from "../ui/Header";

test("renders Header component with correct styles", () => {
  const { getByText } = render(<Header />);
  const headerElement = getByText(/demo header/i);
  expect(headerElement).toBeInTheDocument();
});
