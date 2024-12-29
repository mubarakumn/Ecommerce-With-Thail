import { FiSettings } from "react-icons/fi"

const Settings = () => {
  return (
    <div className="flex sticky top-[calc(100vh_-_48px_-_16px)]
    flex-col h-12 border-t px-2 border-stone-300 justify-end text-xs"
    >
    <div className="flex items-center justify-between">
        <button className="flex gap-1 items-center hover:bg-stone-200
         px-2 py-1.5 rounded">
            <FiSettings/>
            <p className="font-bold">Settings</p>
        </button>
        <button className="px-2 py-1.5 font-medium bg-stone-200 hover:bg-stone-300
         transition-colors rounded">
            Support
        </button>
    </div>
    </div>
  )
}

export default Settings