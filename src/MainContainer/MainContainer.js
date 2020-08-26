import React from 'react';
import Topbar from '../Topbar/Topbar';
import Banner from '../Banner/Banner';
import classes from './MainContainer.module.css';
import MenuCategories from '../MenuCategories/MenuCategories';
import MenuRatings from '../MenuRatings/MenuRatings';

const MainContainer = () => {
    return(
        <div className={classes.MainContainer}>
            <Topbar />
            <Banner />
            <MenuCategories />
            <MenuRatings />
        </div>

    );
}
export default MainContainer;