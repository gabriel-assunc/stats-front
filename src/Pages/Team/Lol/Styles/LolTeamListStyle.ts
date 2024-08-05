import { tv } from "tailwind-variants"

export const LolTeamListDisplay = tv({
    base: 'w-full h-full bg-[#EFEFEF] absolute flex flex-row'
})

export const selectTeamContainer = tv({
    base: "relative h-full w-[20%] flex flex-col justify-center space-y-2 items-center"
})

export const teamStatContainer = tv({
    base: "h-full w-[80%] absolute right-0 bg-[#ADADAD] flex flex-col justify-center p-2"
})

export const mapContainer = tv({
    base: "relative bg-[#273754] w-fit rounded-tl rounded-tr left-4"
})