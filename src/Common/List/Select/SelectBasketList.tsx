import { getCompetition } from "@/Api/Competition/CompetitionActions"
import { useQuery } from "@tanstack/react-query"
import List from "../Basic/List"
import { SelectBasketConteiner } from "./Styles/SelectBasketListStyles"

interface SelectBasketListProps {
    categoryUrl: string
}

const SelectBasketList = ({ categoryUrl }: SelectBasketListProps) => {

    const { data } = useQuery({
        queryFn: () => getCompetition('/competition/' + categoryUrl),
        queryKey: ['seasons'],
        staleTime: Infinity
    })
    
    return <div className={SelectBasketConteiner()}>
        <List listData={data} href={({id}) => `/${id}/basket`} />
    </div>
}

export default SelectBasketList