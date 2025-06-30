import Link from "next/link"

const Header = ({}) => {
    return (
        <header className="bg-teal-500 w-full p-3 fixed">
            <Link href="/">
                <h1 className="text-white text-xl font-bold items-center flex">
                    <span className="mb-1 mr-2" aria-hidden="true">🚅</span>
                    Trenes Chuchuu
                </h1>
            </Link>
        </header>
    )

}

export default Header