import { MemoryRouter } from "react-router-dom";
import { screen, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from "../Home";
import "@testing-library/jest-dom";
test("Check home page loaded", () => {
  //steps for test
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );

  expect(screen.getByText("H")).toBeInTheDocument();
  expect(screen.getByText("i,")).toBeInTheDocument();
  expect(screen.getByText("I")).toBeInTheDocument();
  expect(screen.getByText("'m")).toBeInTheDocument();
  expect(screen.getByText("V")).toBeInTheDocument();

  expect(screen.getByText("W")).toBeInTheDocument();

  const secondHeading = screen.getByRole("heading", { level: 2 });

  expect(secondHeading).toHaveTextContent(
    "Frontend Developer | React | Javascript"
  );
});

test("renders contact button", () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );

  const contactButton = screen.getByRole("link", { name: "CONTACT ME" });
  expect(contactButton).toBeInTheDocument();
});

test("renders download CV button", () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
  const downloadButton = screen.getByRole("link", { name: "Download CV" });
  expect(downloadButton).toBeInTheDocument();
});
