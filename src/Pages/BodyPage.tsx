import { ReactNode } from "react"
import Header from "./Header"
import { homeStyle } from "./Styles/BodyPageStyle"

interface BodyPageProps {
    children: ReactNode
}

const BodyPage = ({ children }: BodyPageProps) => {

    return <div className={homeStyle()}>
        <Header />
        {children}
    </div>
}

export default BodyPage