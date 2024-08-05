import { tv } from "tailwind-variants"

export const deleteDisplay = tv({
    base: "absolute right-2 top-2 hover:bg-slate-600 hover:cursor-pointer rounded-full p-2"
})

export const itemStyle = tv({
    base: 'h-[10%] w-full rounded flex flex-row border-solid border-2 border-[#29282A] p-1 text-2xl relative hover:cursor-pointer',
    variants: {
        secundary: {
            true: 'bg-[#415A77] hover:bg-[#2D3F62]',
            false: 'bg-[#0D1B2A] hover:bg-[#1B263B]'
        }
    },
    defaultVariants: {
        secundary: false
    }
})