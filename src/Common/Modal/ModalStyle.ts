import { tv } from "tailwind-variants"

export const modalBackground = tv({
    base: "z-10 bg-opacity-80 bg-slate-800 w-screen h-screen absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center"
})

export const modalDisplay = tv({
    base: 'h-[70%] w-[80%] bg-slate-100 relative'
})

export const closeDisplay = tv({
    base: 'h-[6%] w-[2.5%] hover:cursor-pointer hover:bg-slate-300 rounded-full absolute right-4 top-4 z-10'
})

export const titleDisplay = tv({
    base: 'w-full text-[300%] border-solid border-b-2 border-red-500 flex justify-center'
})

export const componentDisplay = tv({
    base: 'w-full absolute',
    variants: {
        hasTitle: {
            true: 'h-[90%]',
            false: 'h-full'
        }
    },
    defaultVariants: {
        hasTitle: true
    }
})