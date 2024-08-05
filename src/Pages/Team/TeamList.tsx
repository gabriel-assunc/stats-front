'use client'

import { usePathname } from "next/navigation"
import { useQuery } from "@tanstack/react-query"
import { getTeam } from "@/Api/Scraper/ScraperActions"
import DefaultList from "@/Common/List/Default/DefaultList"
import List from "@/Common/List/Basic/List"

const TeamList = () => {
    const params = usePathname() || ''

    const { data: teams, error: teamError } = useQuery({
        queryFn: () => getTeam(params),
        queryKey: ['teams']
    })

    const redirectTo = (data: any) => `/players/${params.split('/')[2]}/${data.id}`

    return <DefaultList params={params} label='Times' invalidateKey="teams">
        <List
            listData={teams}
            href={redirectTo}
        />
    </DefaultList>
}

export default TeamList