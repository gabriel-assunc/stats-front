import { tv } from "tailwind-variants";

export const itemStyle = tv({
    base: 'flex flex-row space-[10%] bg-[#0D1B2A] hover:bg-[#1B263B] rounded-[12px] h-[10%] relative hover:cursor-pointer justify-center'
})

export const seasonDisplay = tv({
    base: 'flex flex-col h-full w-[10%] rounded bg-[#415A77] space-y-2 pl-2 pr-2 pt-1 pb-1 relative overflow-y-auto'
})

export const display = tv({
    base: 'flex flex-row space-x-2 w-full h-full items-center justify-center relative'
})

export const competitionDisplay = tv({
    base: 'text-black text-2xl flex justify-center w-[20%] h-[100%] relative overflow-y-auto ',
    variants: {
        isCompetitionSelected: {
            true: '',
            false: 'border-solid border-2 border-[#0D1B2A]'
        }
    },
    defaultVariants: {
        isCompetitionSelected: false
    }
})