import { PiCoinsFill } from "react-icons/pi";
import { LuSword } from "react-icons/lu";
import { GiSpikedDragonHead } from "react-icons/gi";
import { SiTurbosquid } from "react-icons/si";
import { tv } from "tailwind-variants";
import { GiOctopus } from "react-icons/gi";
import { GiTowerFall } from "react-icons/gi";
import { GiChampions } from "react-icons/gi";
import { GiOverkill } from "react-icons/gi";
import { GiStoneTower } from "react-icons/gi";

const iconSize = tv({
    base: 'w-full h-full'
})

interface statItemProp {
    label: string,
    icon?: any,
    sufix?: string
}

export const statItem = [{
    label: 'kills',
    icon: <LuSword className={iconSize()} />,
}, {
    label: 'dragons',
    icon: <GiSpikedDragonHead className={iconSize()} />,
}, {
    label: 'baron',
    icon: <GiOctopus className={iconSize()} />,
}, {
    label: 'gold',
    icon: <PiCoinsFill className={iconSize()} />,
    sufix: 'k'
}, {
    label: 'voids',
    icon: <SiTurbosquid className={iconSize()} />,
}, {
    label: 'towers',
    icon: <GiTowerFall className={iconSize()} />,
}, {
    label: 'win',
    icon: <GiChampions className={iconSize()} />,
    sufix: '%'
}, {
    label: 'firstBlood',
    icon: <GiOverkill className={iconSize()} />,
    sufix: '%'
}, {
    label: 'firstBrick',
    icon: <GiStoneTower className={iconSize()} />,
    sufix: '%'
}] as statItemProp[]
