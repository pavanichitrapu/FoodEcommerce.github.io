import React from 'react';
import classes from './MenuCategories.module.css';
//import images
import BurgerImg from '../assets/img-burger.png';
import DownArrow from '../assets/img-arr-down.png';
    import FoodAll from '../assets/img-all-food.png';
    import pizza from '../assets/img-pizza.png';
    import asians from '../assets/img-asians.png';
    import burgers from '../assets/img-burgers.png';
    import barbeque from '../assets/img-barbeque.png';
    import dessert from '../assets/img-dessert.png';
    import thai from '../assets/img-thai.png';
    import sushi from '../assets/img-sushi.png';
    import arright from '../assets/img-arr-right.png';

const MenuCategories = () => {
    return(
             <div className={classes.CategorySection}>
                    <div className={classes.CateSectionHeader}>
                        <p>Restuarants </p>
                        <img className={classes.BurgerImage} src={BurgerImg} alt="Burger" />
                        <div className={classes.CategoryBtnDiv}>
                            <button className={classes.CategoriesButton}>
                                Delivery : <strong>Now</strong>
                                <img className={classes.DownArrow} src={DownArrow} alt="down-Arrow" />
                            </button>
                        </div>
                    </div>

                <div className={classes.MenuItemDisplay}>
                    <div className={classes.MenuItemWrapper}>
                        <div className={classes.FoodIcon}>
                            <img src={FoodAll} alt="All" />
                        </div>
                        <p>All</p>
                    </div>

                    <div className={classes.MenuItemWrapper}>
                        <div className={classes.FoodIcon}>
                            <img src={pizza} alt="pizza" />
                        </div>
                        <p>Pizza</p>
                    </div>

                    <div className={classes.MenuItemWrapper}>
                        <div className={classes.FoodIcon}>
                            <img src={asians} alt="All" />
                        </div>
                        <p>Asians</p>
                    </div>

                    <div className={classes.MenuItemWrapper}>
                        <div className={classes.FoodIcon}>
                            <img src={burgers} alt="All" />
                        </div>
                        <p>Burgers</p>
                    </div>

                    <div className={classes.MenuItemWrapper}>
                        <div className={classes.FoodIcon}>
                            <img src={barbeque} alt="All" />
                        </div>
                        <p>Barbeque</p>
                    </div>

                    <div className={classes.MenuItemWrapper}>
                        <div className={classes.FoodIcon}>
                            <img src={dessert} alt="All" />
                        </div>
                        <p>Dessert</p>
                    </div>

                    <div className={classes.MenuItemWrapper}>
                        <div className={classes.FoodIcon1}>
                            <img className={classes.pine} src={thai} alt="All" />
                        </div>
                        <p>Thai</p>
                    </div>

                    <div className={classes.MenuItemWrapper}>
                        <div className={classes.FoodIcon}>
                            <img className={classes.pine} src={sushi} alt="All" />
                        </div>
                        <p>Sushi</p>
                    </div>
                    <button>
                        <img src={arright} />
                    </button>
                </div>
                </div>
            
        

    );
}
export default MenuCategories;