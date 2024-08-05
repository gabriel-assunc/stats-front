'use client'
import StatChartBasket from "@/Common/Chart/StatChartBasket"
import { useState } from "react"
import { buttonDisplay, buttonStatsDisplay, statButtonStyle } from "./Styles/PopupPlayerStatStyles"

interface PopupPlayerStatProp {
    stats: any[],
    buttonStats: {
        prop: string,
        label?: string,
    }[]
}

const PopupPlayerStat = ({ stats, buttonStats }: PopupPlayerStatProp) => {
    const [selectedStat, setSelectedStat] = useState(null) as any[]
    const [showChart, setShowChart] = useState(false)

    const changeSelectedStat = (prop: string, e: MouseEvent) => {
        e.preventDefault()
        const statData = stats.map((stat) => stat[prop])
        toggleChart()
        setSelectedStat(statData)
    }
    const toggleChart = () => setShowChart(!showChart)
    
    return <div className={buttonStatsDisplay()}>
        <StatChartBasket stat={selectedStat} showChart={showChart} hideChart={toggleChart} />
        <div className={buttonDisplay()}>
            {buttonStats?.map(({ prop, label }) =>
                <div
                    className={statButtonStyle()}
                    onClick={(e: any) => changeSelectedStat(prop, e)}
                    key={prop}
                >
                    {label || prop}
                </div>)}
        </div>
    </div>
}

export default PopupPlayerStat