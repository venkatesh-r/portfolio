import { BrowserRouter } from "react-router-dom";
import { screen, render } from "@testing-library/react";
import About from "../About";
import "@testing-library/jest-dom";

test("Heading render", () => {
  render(
    <BrowserRouter>
      <About />
    </BrowserRouter>
  );
  expect(screen.getByText("A")).toBeInTheDocument();
  expect(screen.getByText("b")).toBeInTheDocument();
  expect(screen.getByText("o")).toBeInTheDocument();
  expect(screen.getByText("u")).toBeInTheDocument();
  expect(screen.getByText("t")).toBeInTheDocument();
  expect(screen.getByText("m")).toBeInTheDocument();
  expect(screen.getByText("e")).toBeInTheDocument();
});

test("Renders about me description", () => {
  render(
    <BrowserRouter>
      <About />
    </BrowserRouter>
  );

  const firstLine = screen.getByText(
    / With over a decade of hands-on experience in the dynamic realm of web development, I have honed my skills in creating impactful digital solutions that resonate with users. My expertise spans across a wide spectrum of technologies including HTML5, CSS3, SASS, JavaScript, jQuery, AngularJS, and ReactJS. Throughout my career, I have demonstrated a keen eye for detail coupled with a strategic mindset, enabling me to conceptualize, design, and implement solutions that exceed client expectations./
  );

  const paragraph = screen.getByText(firstLine, { exact: false });

  const secondLine = screen.getByText(
    /I spends free time reading and travelling./
  );

  expect(paragraph).toBeInTheDocument();
  expect(secondLine).toBeInTheDocument();
});
