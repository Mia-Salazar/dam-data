import { render, screen } from "@testing-library/react";

import Card from "../Card";

describe("Card", () => {
    it("should show props", () => {
        render(<Card title="hola" link="/algo" linkText="link" />);

        const title = screen.getByText(/hola/i)
        expect(title).toBeVisible()

        const linkTitle = screen.getByText(/link/i)
        expect(linkTitle).toBeVisible()

        expect(linkTitle).toHaveAttribute('href', '/algo')
    });
});