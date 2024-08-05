'use client'
import { useState } from "react"
import { itemStyle, selectDisplay } from "./Styles/SelectStyles"

interface SelectProps {
    listItems: any[],
    onSelect: (selectedValue: string) => void
}

const Select = ({ listItems, onSelect }: SelectProps) => {
    const [selectedItem, setSelectedItem] = useState(0)

    const onClick = (e: any, team: any) => {
        e.preventDefault()
        onSelect(team)
        setSelectedItem(team.id)
    }

    return <div className={selectDisplay()}>
        {listItems && listItems.map(item =>
            <h1
                className={itemStyle({ selected: selectedItem === item.id })}
                key={item.id}
                onClick={(e) => onClick(e, item)}
            >
                {item.name}
            </h1>)}
    </div>
}

export default Select