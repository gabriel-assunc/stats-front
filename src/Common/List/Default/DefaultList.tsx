import UpdateButton from "@/Common/Button/Update/Update"
import Label from "@/Common/Label/Label"
import { categoryListDisplay } from "@/Pages/Styles/CategoryStyles"
import { updateTeams } from "@/Api/Scraper/ScraperActions"
import { ReactNode } from "react"
import { updateCompetition } from "@/Api/Competition/CompetitionActions"
import { labelDisplay, listTeamDisplay } from "./DefaultListStyle"

interface DefaultListProps {
    children: ReactNode,
    label: string,
    full?: boolean
    params?: string,
    invalidateKey?: string
    competitionUpdate?: boolean
}

const DefaultList = ({ params = '', children, label, full = false, competitionUpdate = false, invalidateKey }: DefaultListProps) => {
    const updateButtonFn = () => {
        return competitionUpdate ? updateCompetition(params) : updateTeams(params)
    }
    return <div className={categoryListDisplay()}>
        <div className={labelDisplay()}>
            <Label>{label}</Label>
            {!!params && <UpdateButton updateFunction={() => updateButtonFn()} invalidateKey={invalidateKey} />}
        </div>
        <div className={listTeamDisplay({ full })}>
            {children}
        </div>
    </div>
}

export default DefaultList