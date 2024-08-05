import { ReactNode } from "react"

interface buttonProps {
    className?: string,
    onClick?: () => void,
    type?: "button" | "submit" | "reset" | undefined,
    children: ReactNode
}

const Button = ({ onClick, children, className, type = "button" }: buttonProps) => {
    return <button type={type} className={className} onClick={onClick}>
        {children}
    </button>
}

export default Button