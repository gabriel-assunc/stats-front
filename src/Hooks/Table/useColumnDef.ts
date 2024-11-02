import { useMemo } from "react"

export interface columnsDefProps {
    accessorKey: string,
    label?: string
}

const parseTeamData = (gameData: string) => {
    if (gameData === "true") return "Yes"
    if (gameData === "false") return "No"
    return gameData
}

const columnsDef = ({ accessorKey, label }: columnsDefProps) => {
    return {
        accessorKey,
        header: () => label || accessorKey.toUpperCase(),
        cell: (props: any) => parseTeamData(props.getValue().toString())
    }
}

const useColumnDef = (columns: columnsDefProps[]) => {
    const columnsDefined = useMemo(() => columns.map((col) => columnsDef(col)), [])

    return columnsDefined
}

export default useColumnDef