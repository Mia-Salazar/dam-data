import Link from "next/link"

import { CardModel } from "./Card.types"

const Card = ({link, linkText, title}: CardModel) => {
    return (
        <article className="p-4 h-50 flex flex-col justify-center items-center">
            <h3 className="mb-4">{title}</h3>
            <Link href={link} className="bg-gradient-to-r from-pink-500 to-rose-500 px-4 py-2 text-white">
                {linkText}
            </Link>
        </article>
    )

}

export default Card