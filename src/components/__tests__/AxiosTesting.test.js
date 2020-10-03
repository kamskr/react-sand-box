import React from "react";
import { render, waitForElement } from "@testing-library/react";
import AxiosTesting from "../AxiosTesting/AxiosTesting";
import axios from "axios";

jest.mock("axios");
afterEach(() => jest.resetAllMocks());

describe("Axios testing view", () => {
  it("displays loading indicator", () => {
    const { getByText } = render(<AxiosTesting />);
    expect(getByText(/loading/i)).toBeInTheDocument();
  });
  it("displayes user data", async () => {
    axios.get.mockResolvedValue({ data: [{ name: "Adam", age: 29 }] });

    const { getByText } = render(<AxiosTesting />);
    const userInfo = await waitForElement(() => getByText(/Adam/));

    expect(userInfo).toBeInTheDocument();
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(
      "https://run.mocky.io/v3/c07db711-a844-4b1b-ba5f-72856a458ce3?mocky-delay=300ms"
    );
  });
});
