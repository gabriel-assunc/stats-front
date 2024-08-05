'use client'
import DefaultList from "@/Common/List/Default/DefaultList"
import ListPlayer from "@/Common/List/Player/ListPlayer"
import { usePathname } from "next/navigation"

const BasketTeamPlayers = () => {
    const params = usePathname() || ' '

    return <DefaultList params={params} label="Jogadores" invalidateKey="players">
        <ListPlayer urlParam={params} />
    </DefaultList>
}

export default BasketTeamPlayers