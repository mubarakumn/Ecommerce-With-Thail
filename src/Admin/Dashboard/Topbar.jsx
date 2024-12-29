import { FiCalendar} from 'react-icons/fi'
const Topbar = () => {
    return (
        <div className="border-b px-4 max-sm:px-2 mb-4 mt-2  pb-4 max-sm:pb-2 border-stone-200 ">
            <div className="flex items-center justify-between p-0.5">
                <div>
                    <span className="text-sm font-bold block dark:text-white">
                        ✨Good Afternoon, Mubarak!
                    </span>
                    <span className="text-xs  block text-stone-500">
                        Saturday, Nov 9th 2024
                    </span>
                </div>

                <button className='flex text-sm max-sm:text-xs items-center gap-2 bg-stone-100 dark:bg-stone-700 dark:text-stone-200
                transition-colors hover:bg-green-700 px-3 max-sm:px-1 py-1.5 rounded'>
                    <FiCalendar className='text-green-700'/>
                    <span>Prev 6 Months</span>
                </button>
            </div>
        </div>
    )
}

export default Topbar