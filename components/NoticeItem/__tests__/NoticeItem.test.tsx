import { render, screen } from "@testing-library/react";

import NoticeItem from "../../NoticeItem/NoticeItem";

const PROPS = {
    paragraph: "This is an alert",
    chipText: "Del 28 de junio al 18 de julio",
    tags: [
        {
            "text": "Andalucía"
        }
    ],
}

describe("NoticeItem", () => {
    it("should show props", () => {
        render(<NoticeItem {...PROPS} />);

        const title = screen.getByText(/this is an alert/i)
        expect(title).toBeVisible()

        const date = screen.getByText(/del 28 de junio al 18 de julio/i)
        expect(date).toBeVisible()

        const tag = screen.getByText(/andalucía/i)
        expect(tag).toBeVisible()
    });
});