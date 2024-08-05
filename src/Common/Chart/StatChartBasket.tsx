'use client'
import BarChart from "./BarChart"
import usePorcentage from "@/Hooks/Chart/usePorcentage"
import { chartDisplay, popupDisplay } from "./ChartBasket"

interface StatChartBasket {
    stat: number[],
    showChart: boolean,
    hideChart: () => void
}

const StatChartBasket = ({ stat, showChart, hideChart }: StatChartBasket) => {
    const SCORE_MARKS = ['3', '5', '7', '10', '15', '20', '25', '30', '35']
    const PORCENTAGE_RANGE = [0, 100]
    const porcentage = usePorcentage(stat, SCORE_MARKS)

    return showChart && <div className={popupDisplay()} onMouseLeave={hideChart}>
        <div className={chartDisplay()}>
            <BarChart dataToPlot={porcentage} total={stat.length} xMarks={SCORE_MARKS} yMarks={PORCENTAGE_RANGE} />
        </div>
    </div>
}

export default StatChartBasket