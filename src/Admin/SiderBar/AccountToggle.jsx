import logo from "../../assets/fast_black.png"
import {FiChevronDown, FiChevronUp} from 'react-icons/fi'
const AccouintToggle = () => {
  return (
    <div className="border-b mb-4 pb-4 max-sm:pb-0 border-stone-300">
        <button className="flex p-0.5 max-sm:p-0 hover:bg-stone-200 rounded transition-colors
         relative gap-2 w-full items-center"> 
        <img className="size-8 rounded shrink-0 bg-green-900 shadow" src={logo} alt="" />
        <div className="text-start">
            <h1 className="text-sm font-bold block ">Mubarak Usman</h1>
            <p className="text-xs block text-stone-500">mubarak@me.now</p>
        </div>  
       
       <FiChevronDown className="absolute right-2 top-1/2 translate-y-[calc(-50%+4px)] text-xs"/>
       <FiChevronUp className="absolute right-2 top-1/2 translate-y-[calc(-50%-4px)] text-xs"/>
        </button>
    </div>
  )
}

export default AccouintToggle