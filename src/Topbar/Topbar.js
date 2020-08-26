import React from 'react';
import classes from './Topbar.module.css';
import MenuIcon from '../assets/img-menu.png'
import SearchIcon from '../assets/img-search.png'

const Topbar = () => {
    return(
        <header className={classes.Topbar}>
            <img className={classes.ToggleMenu} src={MenuIcon} alt="Menu Icon"/>
            <p className={classes.Logo}>Chukwudi</p>
            <div className={classes.SearchContainer}>
                <img className={classes.SearchIcon} src={SearchIcon} alt='Search-Icon'/>
                <input className={classes.SearchBox} type="text" name="Search" placeholder="Search" />
            </div>
        </header>
    );
}
export default Topbar;