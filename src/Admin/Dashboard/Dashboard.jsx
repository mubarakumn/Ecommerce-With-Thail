import Topbar from './Topbar'
import Stats from './Stats'
const Dashboard = () => {
  return (
    <div className="bg-white dark:bg-stone-950 rounded-lg max-sm:rounded-none pb-4 shadow  ">
      <Topbar/>
      <Stats/>
    </div>
  )
}

export default Dashboard