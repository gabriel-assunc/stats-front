'use client'
import { useContext } from "react"
import { ModalContext } from '../../Provider/ModalProvider'
import ReactDOM from "react-dom"
import { IoIosClose } from "react-icons/io";
import {
    closeDisplay,
    componentDisplay,
    modalBackground,
    modalDisplay,
    titleDisplay
} from "./ModalStyle"

const Modal = () => {
    const { open, content, closeModal } = useContext(ModalContext)

    return open && ReactDOM.createPortal(
        <div className={modalBackground()}>
            <div className={modalDisplay()}>
                <IoIosClose className={closeDisplay()} onClick={closeModal} />
                <>
                    {!!content?.title && <div className={titleDisplay()}>{content?.title}</div>}

                    <div className={componentDisplay({ hasTitle: !!content?.title })}>
                        {content?.component}
                    </div>
                </>
            </div>
        </div>, document.getElementById('portal')!)
}

export default Modal