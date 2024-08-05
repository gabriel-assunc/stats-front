import { z } from "zod";

const lolStatSchema = z.object({
    id: z.string().uuid(),
    teamId: z.string().uuid(),
    version: z.string(),
    win: z.boolean(),
    kills: z.number(),
    dragons: z.number(),
    baron: z.number(),
    towers: z.number(),
    gold: z.number(),
    voids: z.number(),
    time: z.string(),
    firstBlood: z.boolean(),
    firstBrick: z.boolean(),
    blueSide: z.boolean(),
    game: z.string(),
    date: z.string()
})

const LolStatsAverageSchema = z.object({
    win: z.number(),
    kills: z.number(),
    dragons: z.number(),
    baron: z.number(),
    towers: z.number(),
    gold: z.number(),
    voids: z.number(),
    firstBlood: z.number(),
    firstBrick: z.number(),
    winTotal: z.number(),
    lossTotal: z.number(),
    played: z.number(),
})

export type LolStatsType = z.infer<typeof lolStatSchema>
export type LolStatsAverageType = z.infer<typeof LolStatsAverageSchema>