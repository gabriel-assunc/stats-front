import { tv } from "tailwind-variants"

export const ListStyle = tv({
    base: "h-full w-full rounded space-y-4 pt-2 pl-1 pr-1 pb-2 overflow-y-auto",
    variants: {
        secundary: {
            true: 'bg-[#0D1B2A]',
            false: 'bg-[#415A77]'
        }
    }
})