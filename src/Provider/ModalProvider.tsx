'use client'
import { ReactNode, createContext } from "react"
import useModal, { ContentType } from "../Hooks/useModal"
import Modal from "@/Common/Modal/Modal"

interface ModalContextType {
    open: boolean,
    content?: ContentType,
    closeModal: () => void
    handleModal: (content?: ContentType) => void
}

const modalContextDefault = {
    open: false,
    content: {
        title: '',
        component: <></>
    },
    closeModal: () => { },
    handleModal: (content?: ContentType) => { content }
}

interface ModalProviderProps {
    children: ReactNode
}

const ModalContext = createContext<ModalContextType>(modalContextDefault)
const { Provider } = ModalContext

const ModalProvider = ({ children }: ModalProviderProps) => {
    const { open, content, closeModal, handleModal } = useModal()

    return <Provider value={{ open, content, closeModal, handleModal }}>
        <Modal />
        {children}
    </Provider>
}

export { ModalContext, ModalProvider }