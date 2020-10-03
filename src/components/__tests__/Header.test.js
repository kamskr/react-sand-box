import React from "react";
import { render } from "@testing-library/react";
import Header from "../Header/Header"
describe('Header component'), () => {
    it('displays language controls', () =>{
        const {getByText} = render(<Header />)

        expect(getByText(/en/i)).toBeInTheDocument()
        expect(getByText(/pl/i)).toBeInTheDocument()
    });
})
