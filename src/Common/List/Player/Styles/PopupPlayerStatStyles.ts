import { tv } from "tailwind-variants"


export const buttonStatsDisplay = tv({
    base: 'w-full h-full absolute flex justify-center'
})

export const buttonDisplay = tv({
    base: 'h-[40%] w-[90%] flex justify-center item-center bottom-2 absolute border-solid border-t-2 border-b-2 border-slate-500 rounded bg-slate-400'
})

export const statButtonStyle = tv({
    base: 'h-full w-full text-lg flex justify-center item-center border-solid border-l-2 border-r-2 border-slate-500'
})