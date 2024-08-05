'use client'

import { FaTrashCan } from "react-icons/fa6"
import Link from "next/link"
import { deleteDisplay, itemStyle } from "./Styles/ListItemStyle"

interface ListItemProps {
    id: string,
    name: string,
    icon?: string,
    href: string,
    secundary?: boolean,
    onDelete?: (id: string) => void
}
const ListItem = ({ id, name, icon, onDelete, href, secundary }: ListItemProps) => {

    const onClick = (e: MouseEvent) => {
        e.preventDefault()
        if (onDelete) onDelete(id)
    }

    return <Link href={href} className={itemStyle({ secundary })}>
        <div key={id} >
            {name}

            {onDelete && <div className={deleteDisplay()} onClick={(e: any) => onClick(e)}>
                <FaTrashCan size={20} />
            </div>}

        </div>
    </Link>
}

export default ListItem