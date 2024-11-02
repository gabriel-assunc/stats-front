'use client'

import useCalculateLolStat from "@/Hooks/Lol/useCalculateGameStat"
import { LolStatsAverageType, LolStatsType } from "@/Entities/LolStats"
import { useEffect, useState } from "react"
import GeralStatComponent from "./GeralStatComponent"
import WinLossStatsComponent from "./WinLossStatsComponent"
import { bothTeamDisplay } from "./Styles/LolStatsBothTeamStyles"

interface TeamAverageStat {
    geral: LolStatsAverageType,
    win: LolStatsAverageType,
    loss: LolStatsAverageType
}

interface LolStatsBothTeamProps {
    topTeam: { id: string, name: string },
    botTeam: { id: string, name: string },
    topTeamStats: LolStatsType[],
    botTeamStats: LolStatsType[],
    topTeamKeyToInvalidate: string,
    botTeamKeyToInvalidate: string
}

const LolStatsBothTeam = ({
    topTeam,
    botTeam,
    topTeamStats,
    botTeamStats,
    topTeamKeyToInvalidate,
    botTeamKeyToInvalidate
}: LolStatsBothTeamProps) => {
    const [topTeamStatsAverage, setTopTeamStatsAverage] = useState<TeamAverageStat>()
    const [botTeamStatsAverage, setBotTeamStatsAverage] = useState<TeamAverageStat>()
    const [calculateAverage] = useCalculateLolStat()

    useEffect(() => {
        if (topTeamStats)
            setTopTeamStatsAverage(calculateAverage(topTeamStats))
    }, [topTeamStats])

    useEffect(() => {
        if (botTeamStats)
            setBotTeamStatsAverage(calculateAverage(botTeamStats))
    }, [botTeamStats])

    return !!topTeamStatsAverage && !!botTeamStatsAverage && <div className={bothTeamDisplay()}>
        <GeralStatComponent 
        team={topTeam} 
        teamStatAverage={topTeamStatsAverage.geral}
        teamStats={topTeamStats}
        keyToInvalidate={topTeamKeyToInvalidate} />


        <WinLossStatsComponent
            teamWin={{
                name: topTeam.name,
                winTotal: topTeamStatsAverage.geral.winTotal
            }}
            teamLoss={{
                name: botTeam.name,
                lossTotal: botTeamStatsAverage.geral.lossTotal
            }}
            winTeamStatsAverage={topTeamStatsAverage.win}
            lossTeamStatsAverage={botTeamStatsAverage.loss}
        />

        <WinLossStatsComponent
            teamWin={{
                name: botTeam.name,
                winTotal: botTeamStatsAverage.geral.winTotal
            }}
            teamLoss={{
                name: topTeam.name,
                lossTotal: topTeamStatsAverage.geral.lossTotal
            }}
            winTeamStatsAverage={botTeamStatsAverage.win}
            lossTeamStatsAverage={topTeamStatsAverage.loss}
        />

        <GeralStatComponent 
        team={botTeam} 
        teamStatAverage={botTeamStatsAverage.geral}
        teamStats={botTeamStats}
        keyToInvalidate={botTeamKeyToInvalidate} />
    </div >
}

export default LolStatsBothTeam