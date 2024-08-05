import { doGet } from "@/Hooks/useApi";
import { UPDATE } from "../apiEndpoints";

type Players = {
    player: {
        name: string,
        id: string,
        stats: any[]
    }
}

export const updateTeams = async (categoryId: string) => {
    const updateCategory = UPDATE + categoryId
    const res = await doGet(updateCategory)

    return res
}

export const getTeam = async (categoryId: string) => {
    const res = await doGet(categoryId)

    return await res.json()
}

export const updateTeamPlayers = async (teamId: string) => {
    const updateTeam = UPDATE + teamId
    const res = await doGet(updateTeam)

    return res
}

export const getPlayers = async (teamId: string) => {
    const res = await doGet(teamId)

    return await res.json() as Players[]
}