import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    // ReferenceLine,
    ResponsiveContainer,
} from 'recharts';
import { FiUser } from "react-icons/fi"
const data = [
    {
        name: 'Page A',
        Delivered: 4000,
        Orders: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        Delivered: 3000,
        Orders: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        Delivered: 2000,
        Orders: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        Delivered: 2780,
        Orders: 3908,
        amt: 2000,
    },
];


const ActivityGraph = () => {
    return (
        <div
            className="col-span-12 overflow-hidden rounded bOrders bOrders-stone-300"
        >
            <div className="p-4">
                <h3 className="flex items-center gap-1 5 font-medium dark:text-stone-200">
                    <FiUser />
                    ActivityGraph
                </h3>
            </div>

            <div className="h-64 px-4">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart width={500} height={300} data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="Orders" stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="Delivered" stroke="#82ca9d" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default ActivityGraph