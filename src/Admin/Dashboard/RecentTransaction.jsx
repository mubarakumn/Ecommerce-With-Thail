import { FiArrowUpRight, FiDollarSign, FiMoreHorizontal } from "react-icons/fi"

const RecentTransaction = () => {
    return (
        <div
            className="col-span-12 p-4 rounded border border-stone-300 overflow-x-auto"    >
            <div className="mb-4 flex items-center justify-between overflow-y-scroll">
                <h3 className="flex items-center gap-1.5 font-medeium dark:text-stone-200">
                    <FiDollarSign /> RecentTransaction
                </h3>
                <button className="text-sm text-green-700 hover:underline">
                    See all
                </button>
            </div>

            <table className="w-full table-auto ">
                <TableHead />
                <tbody>
                    <TableRow cusId={"ADFGSD"} order={3} sku={"qwg"} price={"afswf"} date={"DRF"} />
                    <TableRow cusId={"ADFGSD"} order={2} sku={"qwg"} price={"afswf"} date={"DRF"} />
                    <TableRow cusId={"ADFGSD"} order={3} sku={"qwg"} price={"afswf"} date={"DRF"} />
                </tbody>
            </table>
        </div>
    )
}

export default RecentTransaction

const TableHead = () => {
    return (
        <thead>
            <tr className="text-sm font-normal text-stone-500">
                <th className="text-start p-1.5">Customer ID</th>
                <th className="text-start p-1.5">Sku</th>
                <th className="text-start p-1.5">Date</th>
                <th className="text-start p-1.5">price</th>
                <th className="w-8"></th>
            </tr>
        </thead>
    )
}
const TableRow = ({ cusId, sku, date, price, order }) => {
    return (
        <tr className={order % 2 ? "text-sm bg-stone-100" : "text-sm"}>
            <td className="p-1.5">
                <a href="#"
                    className="text-green-600 underline flex items-center gap-1 ">
                    {cusId} <FiArrowUpRight />
                </a>
            </td>
            <td className="p-1.5">{sku}</td>
            <td className="p-1.5">{date}</td>
            <td className="p-1.5">{price}</td>
            <td className="w-8">
                <button className="hover:bg-stone-200 transition-colors
                    grid place-content-center rounded text-sm size-8">
                    <FiMoreHorizontal />
                </button>
            </td>
        </tr>
    )
}
