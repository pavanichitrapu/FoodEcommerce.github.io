import React from 'react';
import classes from './Sidebar.module.css';
import user from '../assets/img-user.png';
import Order from '../Order/Order';
import OrderDetails from '../OrderDetails/OrderDetails';

const Sidebar = () => {
    return(
        <div className={classes.Sidebar}>
            <div className={classes.SidebarTopbar}>
            <img src={user} className={classes.User} alt="user" />
            <div className={classes.count}>3</div>
            </div>

            <Order />
            <OrderDetails />
        </div>
    )
}
export default Sidebar;