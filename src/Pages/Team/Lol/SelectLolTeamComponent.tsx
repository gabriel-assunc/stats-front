import { getTeam } from "@/Api/Scraper/ScraperActions"
import Select from "@/Common/List/Select/Select"
import { useQuery } from "@tanstack/react-query"
import { useEffect } from "react"
import { selectTeamDisplay } from "./Styles/SelectLolTeamComponentStyle"

interface SelectTeamComponentProps {
    categoryId: string,
    setOnSelect: (team: any) => void
}

const SelectLolTeamComponent = ({ categoryId, setOnSelect }: SelectTeamComponentProps) => {

    const { data: lolTeams, refetch: refatchTeams } = useQuery({
        queryFn: () => getTeam(categoryId),
        queryKey: ['lol_teams'],
        staleTime: Infinity
    })
    useEffect(() => {
        refatchTeams()
    }, [])

    return <div className={selectTeamDisplay()}>
        <Select
            listItems={lolTeams}
            onSelect={setOnSelect}
        />
    </div>
}

export default SelectLolTeamComponent