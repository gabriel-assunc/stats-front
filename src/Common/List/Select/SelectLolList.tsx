'use client'
import { useEffect, useState } from "react";
import List from "../Basic/List";
import { useQuery } from "@tanstack/react-query";
import { getCompetition, getSeasons } from "@/Api/Competition/CompetitionActions";
import { competitionDisplay, display, itemStyle, seasonDisplay } from "./Styles/SelectLolListStyles";

interface SelectListProps {
    categoryUrl: string,
}

const SelectLolList = ({ categoryUrl }: SelectListProps) => {
    const [selected, setSelected] = useState('')

    const listCompetitionsParams = '/competition/' + selected + '/' + categoryUrl

    const { data: seasons, isLoading: isLoadingSeason, error: seasonsError } = useQuery({
        queryFn: () => getSeasons(categoryUrl),
        queryKey: ['seasons'],
        staleTime: Infinity
    })

    const selectItem = (d: string) => {
        setSelected(d)
    }

    const { data: competitionsRequest, refetch: refetchListPlayers, } = useQuery({
        queryFn: () => getCompetition(listCompetitionsParams),
        queryKey: ['competitions'],
        enabled: false,
        staleTime: Infinity,
    })

    useEffect(() => {
        if (selected)
            refetchListPlayers()
    }, [selected])

    if (seasonsError) console.error(seasonsError)
    if (isLoadingSeason) return <h1>Loading Seasons...</h1>

    return <div className={display()}>
        <div className={seasonDisplay()}>{seasons?.map((d: any) => <h1 className={itemStyle()} onClick={() => selectItem(d)} key={d} >{d}</h1>)}</div>
        <div className={competitionDisplay({ isCompetitionSelected: !!selected })}>
            {!!selected ? <List
                secundary={true}
                listData={competitionsRequest}
                href={({ id }) => '/' + id + '/' + categoryUrl}
            /> : <h1>SELECIONE UMA TEMPORADA</h1>}
        </div>
    </div>
}

export default SelectLolList