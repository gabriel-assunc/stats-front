import { tv } from "tailwind-variants"

export const labelDisplay = tv({
    base: "w-[20%] h-fill flex flex-row space-x-2 justify-center"
})

export const listTeamDisplay = tv({
    base: 'h-[80%] flex justify-center overflow-y-auto',
    variants: {
        full: {
            true: 'w-full',
            false: 'w-[20%]'
        }
    },
    defaultVariants: {
        full: false
    }
})