import { tv } from "tailwind-variants"

export const statsDisplay = tv({
    base: 'h-[50%] w-full flex flex-col relative pb-2 pt-2 bg-[#0D1B2A] pt-4 pb-4 pl-1 pr-1 rounded '
})

export const labelContainer = tv({
    base: "flex flex-row space-x-2 items-center relative left-2"
})

export const statsContainer = tv({
    base: "h-full w-full p-2 bg-[#415A77] rounded justify-center items-center flex flex-col space-y-4"
})