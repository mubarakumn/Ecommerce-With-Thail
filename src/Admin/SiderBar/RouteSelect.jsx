import { FiHome, FiShoppingBag, FiShoppingCart, FiTool, FiUsers } from "react-icons/fi"

const RouteSelect = () => {
  return (
    <div className="space-y-1">
        <Route Icon={FiHome} selected={true} title={"Dashboard"}/>
        <Route Icon={FiShoppingBag} selected={false} title={"Products"}/>
        <Route Icon={FiShoppingCart} selected={false} title={"Transactions"}/>
        <Route Icon={FiUsers} selected={false} title={"Customers"}/>
        <Route Icon={FiTool} selected={false} title={"Todo"}/>
    </div>
  )
}

export default RouteSelect

const Route = ({selected,Icon, title})=>{
    return (
        <button className={`flex items-center justify-start
         gap-2 w-full rounded px-2 py-1.5 text-sm transition-[box-shadow,_background-color,_color]  ${
            selected ? "bg-white text-stone-950 shadow"
            : "hover:bg-stone-200 bg-transparent text-stone-500 shadow-none"
         }`} >
            <Icon className={selected ? "text-green-700": ""}/>
            <span className="hidden md:flex">{title}</span>
        </button>
    )
}