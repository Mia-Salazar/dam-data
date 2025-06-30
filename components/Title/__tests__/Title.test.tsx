import { render, screen } from "@testing-library/react";

import Title from "../Title";

describe("Title", () => {
    it("should show children", () => {
        render(<Title>Este es un título</Title>);

        const title = screen.getByText(/este es un título/i)
        expect(title).toBeVisible()
    });
});