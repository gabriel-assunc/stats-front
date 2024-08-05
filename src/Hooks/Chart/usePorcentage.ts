'useClient'
import { useEffect } from "react"

type PorcentageType = {
    porcentage: number,
    label: string
}

const usePorcentage = (stat: any[], scoreMarks: string[]) => {
    const porcentage = [] as PorcentageType[]

    useEffect(() => {
        let scoresCount = {} as any
        scoreMarks.forEach((score) => scoresCount[score] = 0)

        stat?.forEach((value) => {
            scoreMarks.forEach((scores) => {
                if (value >= Number.parseFloat(scores)) {
                    scoresCount[scores]++
                }
            })
        })

        scoreMarks.forEach((score, index) => {
            porcentage[index] = {
                porcentage: (scoresCount[score] * 100) / stat?.length,
                label: score
            }
        })
    }, [stat])

    return porcentage
}

export default usePorcentage