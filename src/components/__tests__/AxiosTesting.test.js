import React from "react";
import { render } from "@testing-library/react";
import AxiosTesting from "../AxiosTesting/AxiosTesting";

describe("Users view", () => {
  it("displays loading indicator", () => {
    const { getByText } = render(<AxiosTesting />);
    expect(getByText(/loading/i)).toBeInTheDocument();
  });
});
