import Table from "@/Common/Table/Table"
import { LolStatsType } from "@/Entities/LolStats"

interface LolStatsTableProps {
    data: LolStatsType[] | undefined
}

const LolStatsTable = ({ data }: LolStatsTableProps) => {
    const cols = [{
        accessorKey: 'kills'
    }, {
        accessorKey: 'dragons'
    }, {
        accessorKey: 'baron',
        label: 'BARONS'
    }, {
        accessorKey: 'towers'
    }, {
        accessorKey: 'gold',
        label: 'GOLDS (0.0K)'
    }, {
        accessorKey: 'voids'
    }, {
        accessorKey: 'firstBlood',
        label: 'FIRST BLOOD'
    }, {
        accessorKey: 'firstBrick',
        label: 'FIRST BRICK'
    }, {
        accessorKey: 'blueSide',
        label: 'BLUE SIDE'
    }, {
        accessorKey: 'game'
    }, {
        accessorKey: 'time'
    }, {
        accessorKey: 'version'
    }, {
        accessorKey: 'win'
    }, {
        accessorKey: 'date'
    }]

    return <Table columns={cols} data={data} />
}

export default LolStatsTable