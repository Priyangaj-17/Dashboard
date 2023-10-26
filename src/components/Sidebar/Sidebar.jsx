import css from "./Sidebar.module.css"
import {MdSpaceDashboard} from "react-icons/md"
import {AiFillCalendar,AiOutlineTable} from "react-icons/ai"
import {FaTasks} from "react-icons/fa"
import { NavLink } from "react-router-dom"


const Sidebar = () => {
  return (
    <div className={css.container}>
        <img src="./logo.png" alt="" className={css.logo}/>
        <div className={css.menu}>
            <NavLink to="dashboard" className={css.item} title={"Dashboard"}>
                <MdSpaceDashboard size={30}/>
                <span>Dashboard</span>
            </NavLink>
            <NavLink to="calendar" className={css.item} title={"Calendar"}>
                <AiFillCalendar size={30}/>
                <span>Services</span>
            </NavLink>
            <NavLink to="board" className={css.item} title={"Trello Board"}>
                <AiOutlineTable size={30}/>
                <span>Settings</span>
            </NavLink>
            <NavLink to="users" className={css.item} title={"Users"}>
                <FaTasks size={30}/>
                <span>sandwich bar</span>
            </NavLink>
        </div>
    </div>
  )
}

export default Sidebar