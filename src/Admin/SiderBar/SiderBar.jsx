import AccountToggle from "./AccountToggle"
import RouteSelect from "./RouteSelect"
import Search from "./Search"
import Settings from "./Settings"

const SiderBar = () => {
  return (
    <div>
        {/* Main content */}
        <div className="overflow-y-auto  sticky top-4 
        h-[calc(100vh-32px-48px)]">
          <AccountToggle/>
          <Search/>
          <RouteSelect/>
        </div>

        {/* Bottom Content */}
        <Settings/>
    </div>
  )
}

export default SiderBar