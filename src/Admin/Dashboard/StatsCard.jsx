import { FiTrendingDown, FiTrendingUp } from "react-icons/fi"

const StatsCard = () => {
  return (
   <>
   <Card
   title={"Gross Revenue"}
   value="&#8358; 120,3454"
   pilltext="2.75%"
   trend='up'
   period='from Jan 1st - Nov 9th'
   />
   <Card
   title={"Avg Order"}
   value="&#8358; 3,054"
   pilltext="1.01%"
   trend='down'
   period='from Jan 1st - Nov 9th'
   />
   <Card
   title={"Trailing Year"}
   value="&#8358; 120,3454"
   pilltext="60.75%"
   trend='up'
   period='from Jan 1st - Nov 9th'
   className="max-sm:col-span-12"
   />
   </>
  )
}

export default StatsCard

const Card = ({title, value, pilltext, trend, period})=>{
    return <div className="relative p-3 max-md:p-2 max-sm:p-2 bg-gradient-to-tl from--400 to-green-950 dark:bg-black rounded shadow shadow-stone-500 col-span-4 max-sm:col-span-6 ">
        <div className="flex mb-6 max-md:mb-3 max-sm:mb-2 items-start justify-between">
           <div>
            <h3 className="text-stone-300 mb-5 max-md:mb-3 max-sm:mb-2 text-sm">{title}</h3>
            <p className="text-3xl dark:text-green-50 max-md:text-2xl max-sm:text-xl font-semibold">{value}</p>
           </div>

           <span className={`absolute right-3 max-sm:right-1 text-xs flex items-center gap-1 font-medium
            px-2 py-0.5  rounded 
            ${trend === "up" ? "bg-green-100 text-green-700" 
                : "bg-red-100 text-red-700"
            }`}>
                {trend === "up"? <FiTrendingUp/> : <FiTrendingDown/>}
                {pilltext}
            </span>
        </div> 

        <p className="text-xs text-stone-300">{period}</p>       
    </div>
}