import React from "react";
import Header from "../Header/Header";
import { renderWithRouter } from "../../testUtils";
import { LangContext } from "../../context";
import { fireEvent } from "@testing-library/react";

describe("Header component", () => {
  it("displays language controls", () => {
    const { getByText } = renderWithRouter(<Header />);

    expect(getByText(/^en/i)).toBeInTheDocument();
    expect(getByText(/^pl/i)).toBeInTheDocument();
  });

  it("displays default context value", () => {
    const { getByText } = renderWithRouter(<Header />);

    expect(getByText(/current language: en/i)).toBeInTheDocument();
  });

  it("language control buttons calls proper functions with proper arguments", () => {
    const mockedContext = {
      currentLanguage: "en",
      setLanguage: jest.fn(),
    };
    const { getByText } = renderWithRouter(
      <LangContext.Provider value={mockedContext}>
        <Header />
      </LangContext.Provider>
    );

    fireEvent.click(getByText("EN"));
    fireEvent.click(getByText("PL"));

    expect(mockedContext.setLanguage).toBeCalledTimes(2);
    expect(mockedContext.setLanguage).toBeCalledWith("pl");
    expect(mockedContext.setLanguage).toBeCalledWith("en");
  });
});
