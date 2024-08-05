'use client'

import { getTeamStats } from "@/Api/Player/playersActions"
import { updateTeams } from "@/Api/Scraper/ScraperActions"
import { useQuery } from "@tanstack/react-query"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import LolStatsBothTeam from "./LolStatsBothTeam"
import UpdateButton from "@/Common/Button/Update/Update"
import SelectLolTeamComponent from "./SelectLolTeamComponent"
import LolStatContainer from "./LolStatsContainer"
import { LolStatsType } from "@/Entities/LolStats"
import MapFilter from "./MapFilter"
import { LolTeamListDisplay, mapContainer, selectTeamContainer, teamStatContainer } from "./Styles/LolTeamListStyle"

const LolTeamList = () => {
    const params = usePathname() || ''
    const [topTeam, setTopTeam] = useState({ id: '', name: '' })
    const [botTeam, setBotTeam] = useState({ id: '', name: '' })
    const [topTeamStatsSelected, setTopTeamStatsSelected] = useState<LolStatsType[]>([])
    const [botTeamStatsSelected, setBotTeamStatsSelected] = useState<LolStatsType[]>([])

    const SelectItem = (team: any, setState: any) => {
        setState({ id: team.id, name: team.name })
    }

    const { data: topTeamStats, refetch: refetchTopTeam } = useQuery({
        queryFn: () => getTeamStats(topTeam.id),
        queryKey: ['top_team'],
        staleTime: Infinity
    })

    const { data: botTeamStats, refetch: refetchBotTeam } = useQuery({
        queryFn: () => getTeamStats(botTeam.id),
        queryKey: ['bot_team'],
        staleTime: Infinity
    })

    useEffect(() => {
        refetchTopTeam()
    }, [topTeam])

    useEffect(() => {
        refetchBotTeam()
    }, [botTeam])

    useEffect(() => {
        setTopTeamStatsSelected(topTeamStats || [])
    }, [topTeamStats])

    useEffect(() => {
        setBotTeamStatsSelected(botTeamStats || [])
    }, [botTeamStats])

    const filterGames = (gameNumber = '') => {
        setTopTeamStatsSelected(topTeamStats?.filter(game => game?.game.includes(gameNumber)) || [])
        setBotTeamStatsSelected(botTeamStats?.filter(game => game?.game.includes(gameNumber)) || [])
    }

    const selectedBothTeam = () => !!topTeam.id && !!botTeam.id
    return <div className={LolTeamListDisplay()}>
        <div className={selectTeamContainer()}>
            <UpdateButton updateFunction={() => updateTeams(params)} invalidateKey='lol_teams' />
            <SelectLolTeamComponent categoryId={params} setOnSelect={(team: any) => SelectItem(team, setTopTeam)} />
            {topTeam.id && <SelectLolTeamComponent categoryId={params} setOnSelect={(team: any) => SelectItem(team, setBotTeam)} />}
        </div>
        <div className={teamStatContainer()}>
            <div className={mapContainer()}>
                <MapFilter total={5} filterFn={filterGames} />
            </div>
            {selectedBothTeam() ?
                <LolStatsBothTeam
                    topTeam={topTeam}
                    botTeam={botTeam}
                    topTeamStats={topTeamStatsSelected}
                    botTeamStats={botTeamStatsSelected}
                    topTeamKeyToInvalidate={'top_team'}
                    botTeamKeyToInvalidate={'bot_team'}
                />
                :
                <LolStatContainer
                    team={topTeam}
                    teamStats={topTeamStatsSelected}
                    keyToInvalidate={'top_team'}
                />
            }
        </div>
    </div>
}

export default LolTeamList