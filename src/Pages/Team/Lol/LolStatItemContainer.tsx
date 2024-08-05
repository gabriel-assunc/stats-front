import LolStatItem from "./LolStatItem"
import { statItem } from "./StatsItems"
import { statItemDisplay } from "./Styles/LolStatItemContainerStyle"

interface LolStatItemContainerProps {
    statData: any,
    color?: 'grey' | 'red' | 'green'
}

const LolStatItemContainer = ({ statData, color = 'grey'}: LolStatItemContainerProps) => {
    return <div className={statItemDisplay({ color })}>
        {statItem.map(({ label, icon, sufix }) => <LolStatItem
            key={label}
            label={label}
            icon={icon}
            value={statData[label]}
            sufix={sufix}
        />)}
    </div>
}

export default LolStatItemContainer