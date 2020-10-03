import React from "react";
import { fireEvent, render } from "@testing-library/react";
import Input from "../Input/input";

const renderInput = (props) => {
  const utils = render(<Input name="name" label="Name" {...props} />);
  const input = utils.getByLabelText(/name/i);

  return { ...utils, input };
};

describe("Input component", () => {
  test("renders input element", () => {
    const { getByLabelText } = renderInput();
    expect(getByLabelText("Name")).toBeInTheDocument();
  });

  test("displays default placeholder", () => {
    const { getByPlaceholderText, rerender } = renderInput();

    let placeholderText = "Default placeholder";

    expect(getByPlaceholderText(placeholderText)).toBeInTheDocument();

    placeholderText = "Name";

    rerender(<Input name="name" label="name" placeholder={placeholderText} />);

    expect(getByPlaceholderText(placeholderText)).toBeInTheDocument();
  });

  test("displays proper value", () => {
    const { input } = renderInput();

    expect(input).toBeInTheDocument();

    fireEvent.change(input, { target: { value: "Kamil" } });

    expect(input).toHaveValue("Kamil");
  });

  test("prevents user from passing numbers", () => {
    const { input } = renderInput();

    fireEvent.change(input, { target: { value: "roman123" } });
    expect(input).toHaveValue("roman");
  });

  test("displays error when digits are passed", () => {
    const { container, input } = renderInput();

    fireEvent.change(input, { target: { value: "roman123" } });
    expect(container).not.toHaveTextContent(/error/i);

    fireEvent.change(input, { target: { value: "roman123$$$" } });
    expect(container).toHaveTextContent(/error/i);

    fireEvent.change(input, { target: { value: "roman" } });
    expect(container).not.toHaveTextContent(/error/i);
  });
});
