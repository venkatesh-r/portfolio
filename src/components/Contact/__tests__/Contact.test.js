import { BrowserRouter } from "react-router-dom";
import { screen, render, fireEvent } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";
import emailjs from "@emailjs/browser";

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

describe("contact form", () => {
  test("fills and submit the contact form", () => {
    render(
      <BrowserRouter>
        <Contact />
      </BrowserRouter>
    );

    // Get all form fields
    const nameInput = screen.getByPlaceholderText("Name");
    const emailInput = screen.getByPlaceholderText("Email");
    const subjectInput = screen.getByPlaceholderText("Subject");
    const messageInput = screen.getByPlaceholderText("Message");
    const sendButton = screen.getByDisplayValue("SEND");

    //stimulate typing
    fireEvent.change(nameInput, { target: { value: "Venkatesh" } });
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(subjectInput, { target: { value: "Test" } });
    fireEvent.change(messageInput, {
      target: { value: "This is test message" },
    });

    //check the input values
    expect(nameInput.value).toBe("Venkatesh");
    expect(emailInput.value).toBe("test@example.com");
    expect(subjectInput.value).toBe("Test");
    expect(messageInput.value).toBe("This is test message");

    //Submit the form
    fireEvent.click(sendButton);
  });
});

jest.mock("@emailjs/browser", () => ({
  __esModule: true,
  default: {
    sendForm: jest.fn(),
  },
}));

describe("Contact form", () => {
  test("sends email on form submit", async () => {
    emailjs.sendForm.mockResolvedValueOnce({ status: 200 });

    render(<Contact />);

    fireEvent.change(screen.getByPlaceholderText("Name"), {
      target: { value: "John" },
    });
    fireEvent.change(screen.getByPlaceholderText("Email"), {
      target: { value: "john@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Message"), {
      target: { value: "Hello" },
    });

    fireEvent.submit(screen.getByTestId("contact-form"));

    expect(emailjs.sendForm).toHaveBeenCalled();
  });
});
