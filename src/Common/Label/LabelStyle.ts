import { tv } from "tailwind-variants";

export const labelStyle = tv({
    base: 'text-black bg-[#415A77] w-fit p-2 text-xl',
    variants: {
        roundedTopOnly: {
            true: 'rounded-t',
            false: 'rounded'
        }
    }, defaultVariants: {
        roundedTopOnly: false
    }
})