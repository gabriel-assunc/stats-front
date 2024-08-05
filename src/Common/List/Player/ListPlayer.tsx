'use client'

import { useQuery } from "@tanstack/react-query"
import ListPlayerItem from "./ListPlayerItem"
import { getPlayers } from "@/Api/Scraper/ScraperActions"
import { playerListContainer } from "./Styles/ListPlayerStyles"

interface ListPlayerProp {
    urlParam: string
}

const ListPlayers = ({ urlParam }: ListPlayerProp) => {
    const { data: players } = useQuery({
        queryFn: () => getPlayers(urlParam),
        queryKey: ['players']
    })

    return <div className={playerListContainer()}>
        {players?.map(({ player }) => <ListPlayerItem
            id={player.id}
            key={player.id}
            name={player.name}
            stats={player.stats}
        />)}
    </div>
}

export default ListPlayers