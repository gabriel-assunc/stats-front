import { tv } from "tailwind-variants"

export const mapButtonStyle = tv({
    base: "pl-2 pr-2 rounded",
    variants: {
        selected: {
            true: 'bg-[#0D1B2A]',
            false: 'bg-[#273754]'
        }
    }, defaultVariants: {
        selected: false
    }
})