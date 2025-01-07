'use client'
import { LolStatsType } from "@/Entities/LolStats"
import useColumnDef, { columnsDefProps } from "@/Hooks/Table/useColumnDef"
import { flexRender, getCoreRowModel, getPaginationRowModel, useReactTable } from "@tanstack/react-table"
import { useState } from "react"
import TableFoot from "./TableFoot"
import { headerItemStyle, itemRowStyle, tableBodyStyle, tableDisplay, tableHeaderStyle, tableStyle } from "./Style/Table"
import { teamStats } from "@/Hooks/Lol/useCalculateGameStat"

interface TableProps {
    columns: columnsDefProps[],
    data: teamStats[] | undefined
}

const Table = ({ columns, data }: TableProps) => {
    const lolStatsColumns = useColumnDef(columns)
    const teamStats = data?.map(({ teamStats }) => teamStats)
    const [teamData,] = useState(teamStats || [{}])

    const table = useReactTable({
        defaultColumn: {
            enableResizing: false,
            minSize:1,
            maxSize:10
        },
        columns: lolStatsColumns,
        data: teamData,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
    })

    return <div className={tableDisplay()}>
        <table className={tableStyle()}>
            <thead className={tableHeaderStyle()}>
                {table.getHeaderGroups().map(headerGroups => <tr key={headerGroups.id}>{
                    headerGroups.headers.map((header) => <th key={header.id} className={headerItemStyle()}>
                        {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                        )}
                    </th>)
                }</tr>)}
            </thead>
            <tbody className={tableBodyStyle()}>
                {table.getRowModel().rows.map((row) => <tr key={row.id} className={itemRowStyle()}>
                    {row.getVisibleCells().map((cells) => <td key={cells.id}>
                        {flexRender(
                            cells.column.columnDef.cell,
                            cells.getContext()
                        )}
                    </td>)}
                </tr>)}
            </tbody>
            <TableFoot table={table} />
        </table>
    </div>
}

export default Table