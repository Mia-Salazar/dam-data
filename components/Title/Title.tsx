import { TitleInterface } from "./Title.types"

const Title: React.FC<TitleInterface> = ({ children }) => {
    return (
        <h2 className="text-center text-3xl">{children}</h2>
    )

}

export default Title