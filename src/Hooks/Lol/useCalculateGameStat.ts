import { LolStatsAverageType, LolStatsType } from "@/Entities/LolStats"

const useCalculateLolStat = () => {
    const calculateStat = (data: LolStatsType[], filter?: (data: any) => boolean) => {
        if (filter) data = data.filter(filter)
        let lolAverageStat = {
            baron: 0,
            dragons: 0,
            firstBlood: 0,
            firstBrick: 0,
            gold: 0,
            kills: 0,
            lossTotal: 0,
            played: 0,
            towers: 0,
            voids: 0,
            win: 0,
            winTotal: 0
        } as LolStatsAverageType
        for (let i in data) {
            lolAverageStat.dragons += data[i].dragons
            lolAverageStat.baron += data[i].baron
            lolAverageStat.kills += data[i].kills
            lolAverageStat.voids += data[i].voids
            lolAverageStat.towers += data[i].towers
            lolAverageStat.gold += data[i].gold
            lolAverageStat.firstBlood += data[i].firstBlood ? 1 : 0
            lolAverageStat.firstBrick += data[i].firstBrick ? 1 : 0
            lolAverageStat.win += data[i].win ? 1 : 0
        }

        return {
            dragons: (lolAverageStat.dragons / data.length),
            baron: (lolAverageStat.baron / data.length),
            kills: (lolAverageStat.kills / data.length),
            voids: (lolAverageStat.voids / data.length),
            towers: (lolAverageStat.towers / data.length),
            gold: (lolAverageStat.gold / data.length),
            firstBlood: (lolAverageStat.firstBlood / data.length) * 100,
            firstBrick: (lolAverageStat.firstBrick / data.length) * 100,
            win: (lolAverageStat.win / data.length) * 100,
            played: data.length,
            winTotal: lolAverageStat.win,
            lossTotal: data.length - lolAverageStat.win
        }
    }

    const calculateAverage = (data: LolStatsType[]) => {
        return {
            geral: calculateStat(data),
            win: calculateStat(data, (data) => data.win),
            loss: calculateStat(data, (data) => !data.win)
        }
    }

    return [calculateAverage]
}

export default useCalculateLolStat