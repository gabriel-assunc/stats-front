"use client"
import Button from "@/Common/Button/Button";
import { updateStyle } from "@/Common/Button/Update/UpdateStyle";
import { BsCardList } from "react-icons/bs";
import LolStatsTable from "./LolStatsTable";
import { useContext } from "react";
import { ModalContext } from "@/Provider/ModalProvider";
import { teamStats } from "@/Hooks/Lol/useCalculateGameStat";

interface MoreDetailsButtonProps {
    gameData: teamStats[] | undefined,
    teamName: string,
}

const MoreDetailsButton = ({ gameData, teamName }: MoreDetailsButtonProps) => {
    const { handleModal } = useContext(ModalContext)

    const onClick = () => {
        return handleModal({
            title: teamName + " - Game History",
            component: <LolStatsTable data={gameData} />
        })
    }


    return <Button className={updateStyle()} onClick={() => onClick()}>
        <BsCardList className="w-full h-full" />
    </Button>
}

export default MoreDetailsButton