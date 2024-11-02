"use client"
import { ReactNode, useState } from "react";

export interface ContentType {
    title?: string,
    component?: ReactNode
}

const useModal = () => {
    const [open, setOpen] = useState(false)
    const [content, setContent] = useState<ContentType>({})

    const closeModal = () => {
        setOpen(false)
    }

    const handleModal = (content?: ContentType) => {
        setOpen(!open);
        if (!!content) setContent(content)
    }

    return { open, content, closeModal, handleModal }
}

export default useModal;