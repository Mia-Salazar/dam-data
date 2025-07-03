import { render, screen } from "@testing-library/react";

import NoticeList from "../NoticeList";
import userEvent from "@testing-library/user-event";

const NOTICES = [
    {
        paragraph: "Renfe modifica el horario del Intercity",
        chipText: "Desde el 3 de julio",
        aspect: "primary",
        link: "link1",
        tags: [
            {
                text: "Andalucía"
            }
        ],
        target: "_self"
    },
    {
        paragraph: "Renfe cancela el tren",
        chipText: "Desde el 3 de julio",
        aspect: "primary",
        link: "link2",
        tags: [
            {
                text: "Burgos"
            }
        ],
        target: "_self"
    }
]

describe("NoticeList", () => {
    it("should filter by city", async () => {
        render(<NoticeList notices={NOTICES} />);

        const numberOfResults = screen.getByText(/2/i)
        expect(numberOfResults).toBeVisible()

        const firstText = screen.getByText(/Renfe modifica el horario del Intercity/i)
        expect(firstText).toBeVisible()

        const secondText = screen.getByText(/Renfe cancela el tren/i)
        expect(secondText).toBeVisible()

        const cityFilter = screen.getByText(/burgos/i)
        await userEvent.click(cityFilter)

        const newNumberOfResults = screen.getByText(/1/i)
        expect(newNumberOfResults).toBeVisible()

        const firstTextBis = screen.queryByText(/Renfe modifica el horario del Intercity/i)
        expect(firstTextBis).not.toBeInTheDocument()

        const secondTextBis = screen.getByText(/Renfe cancela el tren/i)
        expect(secondTextBis).toBeVisible()
    });

    it("should reset props", async () => {
        render(<NoticeList notices={NOTICES} />);
        const cityFilter = screen.getByText(/burgos/i)
        await userEvent.click(cityFilter)

        const newNumberOfResults = screen.getByText(/1/i)
        expect(newNumberOfResults).toBeVisible()

        const reset = screen.getByText(/resetear filtros/i)
        await userEvent.click(reset)

        const numberOfResults = screen.getByText(/2/i)
        expect(numberOfResults).toBeVisible()
    });
});