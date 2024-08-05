import PopupPlayerStat from "./PopupPlayerStat"
import { playerItemStyle } from "./Styles/ListPlayerItemStyles"

interface ListPLayerItemProp {
    id: string,
    name: string
    stats: {
        prop: string,
        label?: string,
    }[]
}

const ListPlayerItem = ({ id, name, stats }: ListPLayerItemProp) => {
    const buttonStats = [
        { prop: 'pts' },
        { prop: 'ast' },
        { prop: 'reb' },
        { prop: 'three_pointers', label: '3%' }]
    return <div className={playerItemStyle()} key={id}>
        <h1>{name}</h1>
        <PopupPlayerStat
            stats={stats}
            buttonStats={buttonStats}
        />
    </div>
}

export default ListPlayerItem