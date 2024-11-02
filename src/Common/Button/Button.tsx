import { ReactNode } from "react"

interface buttonProps {
    className?: string,
    onClick?: () => void,
    type?: "button" | "submit" | "reset" | undefined,
    disabled?: boolean,
    children: ReactNode
}

const Button = ({ onClick, children, className, type = "button", disabled=false }: buttonProps) => {
    return <button type={type} className={className} onClick={onClick} disabled={disabled}>
        {children}
    </button>
}

export default Button