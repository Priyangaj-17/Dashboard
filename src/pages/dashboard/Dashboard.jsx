
import Orders from '../../components/Order/Order';
import Statistics from '../../components/Statistics/statistics';
import { cardsData, groupNumber } from '../../data';
import css from './Dashboard.module.css';


const Dashboard = () => {
 
  console.log(cardsData)
  return (
<div className={css.container}>
<div className={css.dashboard}>
<div className={`${css.dashboardHead} theme-container`} >
  <div className={css.head}>
    <span>Dashboard</span>
   <div className={css.durationButton}>
    <select className={css.selectdropdown}>
       <option value="" className={css.selectoption}>1 week</option>
       <option value="" className={css.selectoption}>1 month</option>
       <option value="" className={css.selectoption}>1 year</option>
    </select>
   </div>
  </div>

  <div className={css.cards}>
  {cardsData.map((card, index) => (
    <div className={css.card} key={index}>
      <div className={css.cardHead}>
        <span className={css.title}>{card.title}</span>
        <span className={css.change}>+{card.change}</span>
      </div>
      <div className={css.cardAmount}>
        <span>$</span>
        <span>{groupNumber(card.amount)}</span>
      </div>
    </div>
  ))}
</div>

</div>
<Statistics/>
  </div>

  <Orders/>
</div>
  )
}

export default Dashboard