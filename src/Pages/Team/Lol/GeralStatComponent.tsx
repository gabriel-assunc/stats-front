import UpdateButton from "@/Common/Button/Update/Update"
import { LolStatsAverageType, LolStatsType } from "@/Entities/LolStats"
import LolStatItemContainer from "./LolStatItemContainer"
import { updateTeamPlayers } from "@/Api/Scraper/ScraperActions"
import Label from "@/Common/Label/Label"
import { geralStatContainer, geralStyleDisplay, labelDisplay } from "./Styles/GeralStatComponentStyle"
import MoreDetailsButton from "./MoreDetailsButton/MoreDetailsButton"

interface GeralStatComponentProps {
    team: { id: string, name: string },
    teamStatAverage: LolStatsAverageType,
    teamStats?: LolStatsType[],
    keyToInvalidate: string
}

const GeralStatComponent = ({ team, teamStatAverage, teamStats, keyToInvalidate }: GeralStatComponentProps) => {
    const { id, name } = team

    const gamesPlayed = (teamStatsAverage: LolStatsAverageType) => {
        const { winTotal, lossTotal, played } = teamStatAverage
        return `${teamStatsAverage.win?.toFixed(2)}% (games - ${played} | W ${winTotal} - L ${lossTotal})`
    }

    return <div className={geralStyleDisplay()}>
        <div className={labelDisplay()}>
            <Label roundedTopOnly={true}>{name}: {gamesPlayed(teamStatAverage)}</Label>
            <UpdateButton updateFunction={() => updateTeamPlayers('/players/lol/' + id)} invalidateKey={keyToInvalidate} />
            <MoreDetailsButton gameData={teamStats} teamName={name} />
        </div>
        <div className={geralStatContainer()}>
            <LolStatItemContainer statData={teamStatAverage} />
        </div>
    </div>
}

export default GeralStatComponent