import { ReactNode } from "react"
import { labelStyle } from "./LabelStyle"

interface LabelProps {
    children: ReactNode,
    roundedTopOnly?: boolean
}
const Label = ({ children, roundedTopOnly = false }: LabelProps) => {
    return <h1 className={labelStyle({ roundedTopOnly })}>
        {children}
    </h1>
}

export default Label