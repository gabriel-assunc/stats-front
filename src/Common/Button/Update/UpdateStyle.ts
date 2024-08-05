import { tv } from "tailwind-variants";

export const updateStyle = tv({
    base: 'hover:cursor-pointer bg-[#415A77] hover:bg-[#314A67] text-white rounded-full p-2',
    variants: {
        isUpdating: {
            true: 'animate-spin',
            false: ''
        }
    },
    defaultVariants: {
        isUpdating: false,
    }
})