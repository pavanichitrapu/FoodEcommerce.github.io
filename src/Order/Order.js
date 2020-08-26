import React from 'react';
import classes from './Order.module.css';
import Smiley from '../assets/img-smiley.png';

const Order = () => {
    return(
        <div className={classes.Order}>
            <div>
           <div className={classes.OrderHeader}>My
           <span>
           <img src={Smiley} className={classes.smiley} />
           </span>
           </div>
           <div className={classes.OrderHeader}>Order
           </div>
           </div>
        
            <div className={classes.Address}>
            <div>
                <p className={classes.paraText}>625 St Marks Ave</p>
                <p className={classes.para}>Edit</p>
            </div>
            <div>
                <div className={classes.Icondiv}><i class="far fa-clock"></i></div>
                <p className={classes.paraText}>35 min</p>
                <p className={classes.para}>Choose Time</p>
            </div>
        </div>
        </div>
    )
}
export default Order;