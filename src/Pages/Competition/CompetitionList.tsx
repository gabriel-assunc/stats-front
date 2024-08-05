'use client'
import DefaultList from "@/Common/List/Default/DefaultList"
import SelectBasketList from "@/Common/List/Select/SelectBasketList"
import SelectLolList from "@/Common/List/Select/SelectLolList"
import { useParams } from "next/navigation"

const CompetitionList = () => {
    const categoryUrl = (useParams()?.categoryUrl.toString()) as keyof typeof competitionList

    const competitionList = {
        lol: <SelectLolList categoryUrl={categoryUrl} />,
        basket: <SelectBasketList categoryUrl={categoryUrl} />,
    }

    return <DefaultList
        params={'/' + categoryUrl}
        label={`Competição: ${categoryUrl}`}
        competitionUpdate={true}
        invalidateKey='seasons'
        full={categoryUrl === 'lol'}>
        {competitionList[categoryUrl]}
    </DefaultList>
}
export default CompetitionList