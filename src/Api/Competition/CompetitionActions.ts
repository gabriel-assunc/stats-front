import { doGet } from "@/Hooks/useApi"
import { COMPETITION_URL, SEASON, UPDATE } from "../apiEndpoints"

export const getCompetition = async (params: string) => {
    const res = await doGet(params)

    return await res.json()
}

export const updateCompetition = async (categoryUrl: string) => {
    const updateCategory = COMPETITION_URL + UPDATE + categoryUrl
    const res = await doGet(updateCategory)

    return res
}

export const getSeasons = async (categoryUrl: string) => {
    const seasonCategory = SEASON + categoryUrl
    const res = await doGet(seasonCategory)

    return await res.json()
}