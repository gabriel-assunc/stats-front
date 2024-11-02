import { Table } from "@tanstack/react-table"
import { useState } from "react"
import Button from "../Button/Button"
import { pageButtonStyle, tableFootDisplay, tableFootStyle } from "./Style/TableFoot"

interface TableFootProps {
    table: Table<{}>
}

const TableFoot = ({ table }: TableFootProps) => {
    const [pageCount, setPageCount] = useState(0)

    const previousPage = () => {
        table.previousPage()
        setPageCount(pageCount - 1)
    }

    const nextPage = () => {
        table.nextPage()
        setPageCount(pageCount + 1)
    }

    return <div className={tableFootDisplay()}>
        <tfoot className={tableFootStyle()}>
            <Button onClick={previousPage} disabled={!table.getCanPreviousPage()} className={pageButtonStyle()}>
                {'<'}
            </Button>
            <span> {pageCount + 1} : {table.getPageCount()} </span>
            <Button onClick={nextPage} disabled={!table.getCanNextPage()} className={pageButtonStyle()}>
                {'>'}
            </Button>
        </tfoot>
    </div>

}

export default TableFoot