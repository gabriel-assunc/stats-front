'use client'
import ListItem from "./ListItem"
import AddItem from "./AddItem"
import { CategoryType } from "@/Api/Category/CategoryActions"
import { ListStyle } from "./Styles/ListStyle"

interface ListProps {
    listData: CategoryType[],
    deleteItem?: (id: string) => void,
    addModal?: () => void,
    href: (data: any) => string,
    secundary?: boolean,
}

const List = ({ listData, deleteItem, addModal, href, secundary = false }: ListProps) => {
    return <div className={ListStyle({ secundary })}>
        {listData?.map(({ id = " ", name, icon, url }) => <ListItem
            secundary={secundary}
            id={id}
            key={id}
            name={name}
            icon={icon}
            onDelete={deleteItem}
            href={href({ id, name, url })}
        />)}
        {!!addModal && <AddItem handleModal={addModal} />}
    </div>
}

export default List