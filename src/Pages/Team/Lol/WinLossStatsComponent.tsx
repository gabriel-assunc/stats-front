import LolStatItemContainer from "./LolStatItemContainer"
import { LolStatsAverageType } from "@/Entities/LolStats"
import Label from "@/Common/Label/Label"
import { labelDisplay, winLossStatsContainer, winLossStatsDisplay } from "./Styles/WinLossStatsComponentStyle"

interface WinLossStatsComponentProps {
    teamWin: { name: string, winTotal: number },
    teamLoss: { name: string, lossTotal: number },
    winTeamStatsAverage: LolStatsAverageType,
    lossTeamStatsAverage: LolStatsAverageType
}
const WinLossStatsComponent = ({ teamWin, teamLoss, winTeamStatsAverage, lossTeamStatsAverage }: WinLossStatsComponentProps) => {

    return <div className={winLossStatsDisplay()}>
        <div className={labelDisplay()}>
            <Label roundedTopOnly={true}>
                {teamWin.name} (win {teamWin.winTotal}) VS {teamLoss.name} (loss {teamLoss.lossTotal})
            </Label>
        </div>
        <div className={winLossStatsContainer()}>
            <LolStatItemContainer statData={winTeamStatsAverage} color="green" />
            <LolStatItemContainer statData={lossTeamStatsAverage} color="red" />
        </div>
    </div>
}

export default WinLossStatsComponent