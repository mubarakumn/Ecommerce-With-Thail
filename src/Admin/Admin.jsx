import Dashboard from "./Dashboard/Dashboard"
import SiderBar from "./SiderBar/SiderBar"

const Admin = () => {
  return (
    <div className="grid gap-4 p-4 max-sm:p-0 grid-cols-[220px,_1fr] max-sm:grid-cols-[10%,_1fr] bg-stone-100 dark:bg-black">
        <SiderBar/>
        <Dashboard/>
    </div>
)
}

export default Admin