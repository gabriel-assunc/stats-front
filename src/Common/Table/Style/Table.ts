import { tv } from "tailwind-variants";

export const tableDisplay = tv({
    base: "w-full h-full pt-[2%] pb-[3%] pl-[2%] pr-[2%] relative flex justify-center items-center text-center"
})

export const tableStyle = tv({
    base: "h-full w-full relative"
})

export const tableHeaderStyle = tv({
    base: "h-[15%]"
})

export const tableBodyStyle = tv({
    base: "h-[85%] w-full table-fixed bg-slate-200"
})

export const headerItemStyle = tv({
    base: "bg-slate-400 pl-2 pr-2 border-solid border-2 border-slate-500 w-[6%]"
})

export const itemRowStyle = tv({
    base: "even:bg-slate-300 w-[6%] h-[10%] border-solid"
})