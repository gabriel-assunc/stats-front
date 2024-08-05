'use client'
import { doGet } from "@/Hooks/useApi"
import { CATEGORY } from "../apiEndpoints"

export type CategoryType = {
    id?: string,
    name: string,
    url: string,
    icon?: any
}

export const getCategories = async () => {
    const res = await doGet(CATEGORY)

    return await res.json()
}
