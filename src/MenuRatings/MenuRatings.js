import React from 'react';
import classes from './MenuRatings.module.css';
import Star from '../assets/img-star.png';
import Bagel from '../assets/img-bagel.jpg';
import Estaminet from '../assets/estaminet.jpg';
import leparis from '../assets/img-le-paris.jpg';

const MenuRatings = () => {
    return(
        <div className={classes.MenuRatingsDivWrapper}>
        <div className={classes.MenuRatingsDiv}>
            <div className={classes.RatingsImgWrapper}>
                <img className={classes.MenuRatingsImg}
                src={Bagel}  />
                <div className={classes.TimeValue}> 
                25-30 min
                </div>
            </div>
            <div className={classes.RatingsDesc}>
                <p className={classes.Title}>Bagel Story</p>
                <div className={classes.Ratings}>
                <img className={classes.star} src={Star}  />
                     4.7
                     <p>Deli</p>
                     <p>.</p>
                     <p>Bagels</p>
                     <p>.</p>
                     <p>$$</p>
                </div>
            </div>
        </div>

        <div className={classes.MenuRatingsDiv}>
            <div className={classes.RatingsImgWrapper}>
                <img className={classes.MenuRatingsImg}
                src={Estaminet}  />
                <div className={classes.TimeValue}> 
                30-35 min
                </div>
            </div>
            <div className={classes.RatingsDesc}>
                <p className={classes.Title}>The Estaminet</p>
                <div className={classes.Ratings}>
                <img className={classes.star} src={Star}  />
                     4.5
                     <p>Cafes</p>
                     <p>.</p>
                     <p>Creperies</p>
                     <p>.</p>
                     <p>$</p>
                </div>
            </div>
        </div>


        <div className={classes.MenuRatingsDiv}>
            <div className={classes.RatingsImgWrapper}>
                <img className={classes.MenuRatingsImg}
                src={leparis}  />
                <div className={classes.TimeValue}> 
                40-60 min
                </div>
            </div>
            <div className={classes.RatingsDesc}>
                <p className={classes.Title}>Le Paris Dakar</p>
                <div className={classes.Ratings}>
                <img className={classes.star} src={Star}  />
                     4.6
                     <p>Creperies</p>
                     <p>.</p>
                     <p>Sandwich</p>
                     <p>.</p>
                     <p>$$</p>
                </div>
            </div>
        </div>


    </div>
    );
}
export default MenuRatings;