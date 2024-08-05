import { tv } from "tailwind-variants"

export const selectDisplay = tv({
    base: 'w-full h-full relative bg-[#0D1B2A] overflow-y-auto pt-1 pb-1 pr-2 pl-2 space-y-2 rounded'
})

export const itemStyle = tv({
    base: 'w-full h-[20%] flex justify-center hover:cursor-pointer hover:bg-[#1B263B] rounded-[14px]',
    variants: {
        selected: {
            true: 'bg-[#1B263B]',
            false: 'bg-[#415A77]'
        }
    },
    defaultVariants: {
        selected: false
    }
})