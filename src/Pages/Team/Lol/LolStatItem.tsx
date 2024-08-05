'use client'
import { useState } from "react"
import { lolStatItemStyle } from "./Styles/LolStatItemStyle"

interface LolStatItemProps {
    label: string,
    icon?: any,
    value: number,
    sufix?: string
}
const LolStatItem = ({ label, icon, value, sufix }: LolStatItemProps) => {
    const [hoverText, setHoverText] = useState(false)

    const toggleHoverText = () => setHoverText(!hoverText)

    return <div className={lolStatItemStyle()}>
        {hoverText && <h2 className="absolute -top-[20%] bg-[#778DA9] border-solid border-2 border-[#415A77] z-10 rounded-[5px] pl-2 pr-2 pt-1 pb-1 text-black text-l">
            {label.toLocaleUpperCase()}</h2>}
        {!!icon && <div className="w-[30%] h-[30%]" onMouseEnter={toggleHoverText} onMouseLeave={toggleHoverText}>
            {icon}
        </div>}
        <h1 className="text-2xl">{value >= 0 ? value?.toFixed(2) : 0} {!!sufix && sufix}</h1>
    </div>
}
export default LolStatItem