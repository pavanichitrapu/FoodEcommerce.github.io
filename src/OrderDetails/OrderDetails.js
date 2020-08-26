import React from 'react';
import classes from './OrderDetails.module.css';
import BBQ from '../assets/bbq-burger.png';
import frenchfries from '../assets/french-fries.jpg';
import Cheese from '../assets/cheese.jpg';
import car from '../assets/img-car.png';
import rightArr from '../assets/img-arrow-right-black.png';

const OrderDetails = () => {
    return(
        <div className={classes.OrderMenuWrapper}>

            <div className={classes.MenuItemcard}>
                <img className={classes.MenuImg} src={BBQ} />
                <div className={classes.ItemCount}>
                    <p>1</p>
                    <p>x</p>
                    <p>Beach BBQ Burger</p>
                </div>
                    <p>$14.99</p>
            </div>

            <div className={classes.MenuItemcard}>
                <img className={classes.MenuImg} src={frenchfries} />
                <div className={classes.ItemCount}>
                    <p>1</p>
                    <p>x</p>
                    <p>French Fries</p>
                </div>
                    <p>$9.99</p>
            </div>

            <div className={classes.MenuItemcard}>
                <img className={classes.MenuImg} src={Cheese} />
                <div className={classes.ItemCount}>
                    <p>1</p>
                    <p>x</p>
                    <p>Cheese Sause</p>
                </div>
                    <p>$0.99</p>
            </div>

            <div className={classes.MenuItemcard}>
                <div className={classes.MenuImg}><img  src={car} /></div>
                <div className={classes.ItemCount}>
                    
                    <p>Delivery</p>
                </div>
                    <p>$0.00</p>
            </div>

            <div className={classes.Total} >
                <p>Total:</p>
                <p>$25.97</p>
            </div>

            <div className={classes.CountItems}>
                <h5>Persons</h5>
                <div className={classes.buttons}>
                    <button>+</button>
                    <div>1</div>
                    <button>-</button>
                </div>

                <div className={classes.Checkout}>
                    Checkout<img src={rightArr} />
                </div>
            </div>
        </div>

    );
}
export default OrderDetails;