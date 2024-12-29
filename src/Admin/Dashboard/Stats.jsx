import ActivityGraph from "./ActivityGraph"
import RecentTransaction from "./RecentTransaction"
import StatsCard from "./StatsCard"

const Stats = () => {
  return (
    <div className="px-4 grid gap-3 grid-cols-12">
        <StatsCard/>
        <ActivityGraph/>
        <RecentTransaction/>
    </div>
  )
}

export default Stats