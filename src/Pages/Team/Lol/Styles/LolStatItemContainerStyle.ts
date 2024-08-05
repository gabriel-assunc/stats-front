import { tv } from "tailwind-variants"

export const statItemDisplay = tv({
    base: "h-full w-full rounded text-black relative flex flex-row justify-center items-center space-x-[3%]",
    variants: {
        color: {
            red: 'bg-[#FB7474]',
            green: 'bg-[#9CD3B9]',
            grey: 'bg-[#E0E1DD]'
        }
    },
    defaultVariants: {
        color: 'grey'
    }
})