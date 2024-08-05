import { tv } from "tailwind-variants"

export const modalBackground = tv({
    base: "z-10 bg-opacity-80 bg-slate-800 w-screen h-screen absolute top-0 bottom-0 left-0 right-0"
})

export const modalDisplay = tv({
    base: 'h-[70%] w-[40%] bg-slate-100 top-[14%] left-[32%] relative'
})

export const closeDisplay = tv({
    base: 'h-[6%] w-[5%] hover:cursor-pointer hover:bg-slate-300 rounded-full right-2 top-2 absolute z-10'
})

export const titleDisplay = tv({
    base: 'w-full text-[300%] relative border-solid border-b-2 border-red-500 flex flex-col items-center'
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