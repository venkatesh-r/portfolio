import { BrowserRouter } from "react-router-dom";
import { screen, render } from "@testing-library/react";
import Skills from "../Skills";
import "@testing-library/jest-dom";

test("Heading renders", () => {
  render(
    <BrowserRouter>
      <Skills />
    </BrowserRouter>
  );
  expect(screen.getByText("Technical")).toBeInTheDocument();
  expect(screen.getByText("Skills")).toBeInTheDocument();
});

test("Paragraph renders", () => {
  render(
    <BrowserRouter>
      <Skills />
    </BrowserRouter>
  );
  const paragraph = screen.getByText(
    /My skills include HTML5, CSS3, SASS, JavaScript, jQuery, Angular, React JS, Node JS, Tailwind and MongoDB./
  );

  expect(paragraph).toBeInTheDocument();
});
