import React from 'react'
import { groupNumber, ordersData } from '../../data'
import css from "./Order.module.css"
import { OrdersPieChart } from '../OrdersPieChart/OrdersPieChart'

const Orders = () => {
    return (
        <div className={`${css.container} theme-container`}>
              <div className={css.head}>
                <img src="./logo.png" alt="logo" />
                <span>Orders today</span>
            </div>

            <div className={`grey-container ${css.stat}`}>
                <span>Amount</span>
                <span>$ {groupNumber(4560)}</span>
            </div>

            <div className={css.orders}>
                {
                    ordersData.map((order, index) => (
                        <div key={index} className={css.order}>
                            <div>
                                <span>{order.name}</span>
                                <span>$ {order.change}</span>
                            </div>
                            <div>
                                <span>{order.type}</span>
                                <span>Items: {order.items}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div>
                <span style={{fontSize:"25px"}}>Split by orders</span>
            <OrdersPieChart/>
            </div>
</div>
)
}
export default Orders
