'use client'
import { IoAdd } from "react-icons/io5";
import Button from "@/Common/Button/Button";
import { addDisplay, addStyle } from "./Styles/AddItemStye";

interface AddItemProps {
    handleModal: () => void
}

const AddItem = ({ handleModal }: AddItemProps) => {
    const onClick = () => {
        handleModal()
    }

    return <Button className={addDisplay()} onClick={onClick}>
        <IoAdd className={addStyle()} />
    </Button>
}

export default AddItem;