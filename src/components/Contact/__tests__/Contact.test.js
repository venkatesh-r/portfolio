import { BrowserRouter } from "react-router-dom";
import { screen, render } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("Header renders", () => {
  render(
    <BrowserRouter>
      <Contact />
    </BrowserRouter>
  );

  expect(screen.getByText("C")).toBeInTheDocument();
  expect(screen.getByText("o")).toBeInTheDocument();
  expect(screen.getByText("n")).toBeInTheDocument();
  expect(screen.getByText("m")).toBeInTheDocument();
  expect(screen.getByText("e")).toBeInTheDocument();
});

test("paragraph renders", () => {
  render(
    <BrowserRouter>
      <Contact />
    </BrowserRouter>
  );
  const paragraph = screen.getByText(
    /I'm interested in freelance opportunities, If you need any help just use the form./
  );
  expect(paragraph).toBeInTheDocument();
});
