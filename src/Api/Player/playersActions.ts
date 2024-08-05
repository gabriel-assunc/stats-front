import { LolStatsType } from "@/Entities/LolStats"
import { doGet } from "@/Hooks/useApi"
import { LOL, PLAYERS } from "../apiEndpoints"

export const getTeamStats = async (teamId: string) => {
    const listPlayerByTeamId = PLAYERS + LOL + '/' + teamId
    const res = await doGet(listPlayerByTeamId)
    const teamStats = await res.json() as LolStatsType[] | []
    return teamStats
}