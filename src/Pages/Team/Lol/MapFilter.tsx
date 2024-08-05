import Button from "@/Common/Button/Button"
import { useState } from "react"
import { mapButtonStyle } from "./Styles/MapFilterStyle"

interface MapFilterProps {
    total: number,
    filterFn: (map?: string) => void
}

const MapFilter = ({ total, filterFn }: MapFilterProps) => {
    const [selectedMap, setSelectedMap] = useState(0)
    const buttonFilter = () => {
        const buttons = [{ name: 'Geral', filter: () => filterFn() }]
        for (let i = 1; i <= total; i++) {
            buttons.push({
                name: 'Map ' + i,
                filter: () => filterFn(i.toString())
            })
        }
        return buttons
    }
    const onClick = (filter: () => void, index: number) => {
        filter()
        setSelectedMap(index)
    }
    return buttonFilter().map(({ name, filter }, index) => <Button key={index} onClick={() => onClick(filter, index)} className={mapButtonStyle({ selected: index === selectedMap })}>{name}</Button>)
}

export default MapFilter