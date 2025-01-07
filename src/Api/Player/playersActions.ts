import { LolStatsType } from "@/Entities/LolStats"
import { doGet } from "@/Hooks/useApi"
import { LOL, PLAYERS } from "../apiEndpoints"
import { teamStats } from "@/Hooks/Lol/useCalculateGameStat"

export const getTeamStats = async (teamId: string) => {
    const listPlayerByTeamId = PLAYERS + LOL + '/' + teamId
    const res = await doGet(listPlayerByTeamId)
    const teamStats = await res.json() as teamStats[]
    return teamStats
}