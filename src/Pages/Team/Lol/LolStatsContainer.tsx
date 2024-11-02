'use client'

import { useEffect, useState } from "react"
import LolStatItemContainer from "./LolStatItemContainer"
import useCalculateLolStat from "@/Hooks/Lol/useCalculateGameStat"
import { LolStatsAverageType, LolStatsType } from "@/Entities/LolStats"
import Label from "@/Common/Label/Label"
import UpdateButton from "@/Common/Button/Update/Update"
import { updateTeamPlayers } from "@/Api/Scraper/ScraperActions"
import { labelContainer, statsContainer, statsDisplay } from "./Styles/LolStatsContainerStyles"
import MoreDetailsButton from "./MoreDetailsButton/MoreDetailsButton"

interface LolStatContainerProps {
    teamStats?: LolStatsType[],
    team: { id: string, name: string },
    keyToInvalidate?: string
}

const LolStatContainer = ({ teamStats, team, keyToInvalidate = '' }: LolStatContainerProps) => {
    const { id, name } = team
    const [allGames, setAllGames] = useState({} as LolStatsAverageType)
    const [winGames, setWinGames] = useState({} as LolStatsAverageType)
    const [lossGames, setLossGames] = useState({} as LolStatsAverageType)
    const [calculateAverage] = useCalculateLolStat()

    useEffect(() => {
        if (teamStats) {
            const { geral, win, loss } = calculateAverage(teamStats)

            setAllGames(geral)
            setWinGames(win)
            setLossGames(loss)
        }
    }, [teamStats])

    const teamLabel = () => {
        const { win, winTotal, lossTotal, played } = allGames
        return `${name} : ${win?.toFixed(2)}% (games - ${played} | W ${winTotal} - L ${lossTotal})`
    }

    return <div className={statsDisplay()} >
        <div className={labelContainer()}>
            <Label roundedTopOnly={true}>
                {name === '' ?
                    'Selecione um time' :
                    teamLabel()}
            </Label>
            {!!id && <UpdateButton updateFunction={() => updateTeamPlayers('/players/lol/' + id)} invalidateKey={keyToInvalidate} />}
            {!!id && <MoreDetailsButton gameData={teamStats} teamName={name} />}
        </div>
        <div className={statsContainer()}>
            <LolStatItemContainer statData={allGames} />
            <LolStatItemContainer statData={winGames} color="green" />
            <LolStatItemContainer statData={lossGames} color="red" />
        </div>
    </div>
}

export default LolStatContainer