
import { groupNumber } from "../../data"
import StatisticsChart from "../StatisticsChart/StatisticsChart"
import css from "./Statistics.module.css"
import { BsArrowUpShort } from "react-icons/bs"

const Statistics = () => {
  return (
    <div className={`${css.container} theme-container`}>
        <span className={css.title}>
            Overview Statistics
        </span>
        <div className={`${css.card} grey-container`}>
            <div className={css.container1}>
               <div className={css.arrow}>
                    <BsArrowUpShort/>
               </div>
               <div className={css.content}>
                <span>Top item this month</span>
                <span>Office Campus</span>
               </div>
            </div>
            <div className={css.container2}>
                <span>Items</span>
                <span>$ {groupNumber(455)}</span>
            </div>
            <div className={css.container2}>
                <span>Profit</span>
                <span>$ {groupNumber(37000)}</span>
            </div>
            <div className={css.container2}>
                <span>Daily Average</span>
                <span>$ {groupNumber(2000)}</span>
            </div>
        </div>
      <StatisticsChart/>
    </div>
  )
}
export default Statistics