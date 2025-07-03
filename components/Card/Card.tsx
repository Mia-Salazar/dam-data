import Link from "next/link"

import { CardModel } from "./Card.types"

const Card = ({link, linkText, title}: CardModel) => {
    return (
        <article className="p-4 h-50 flex flex-col justify-center items-center rounded-lg border border-teal-500 hover:bg-teal-500 group transition">
            <h3 className="mb-4 group-hover:text-white">{title}</h3>
            <Link href={link} className="badge px-4 py-2">
                {linkText}
            </Link>
        </article>
    )

}

export default Card