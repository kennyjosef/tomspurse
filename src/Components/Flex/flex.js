import classes from "./flex.module.css";
import Phne from "../../Assets/Later.png";
import P from "../../Assets/invest.png";
import Ph from "../../Assets/Grow.png";
const Flex = () => {
    return ( 
        <div className={classes.flex}>
            <div className={classes.flex_1}>
                <h1>Your guide to</h1> 
                <h1>financial wellness</h1>
                <p>We’ll help you invest, save and spend responsibly for just $1, $2 or $3 per month. 
                    No surprise fees, just surprise upgrades</p>
                    <a href="/">Learn More</a>
                

            </div>
            <div className={classes.flex_2}>
                <div className={classes.border_1}>
                    <div className={classes.invest} >
                    <img src={Phne} className={classes.phne}  alt="myumg" />
                    <h3>Invest your spare change</h3>

                    </div>
                    <div>
                        <p>Set aside the leftover change from everyday purchases 
                            by turning on automatic Round-Ups.</p>
                    </div>

                </div>
                <div className={classes.border}>
                    <div className={classes.save}>
                    <img src={P} className={classes.phne}  alt="myumg" />
                    <h3>Save for Later</h3>
                    

                    </div>
                    <div>
                        <p>Set aside the leftover change from everyday purchases 
                            by turning on automatic Round-Ups.</p>

                    </div>

                </div>
                <div className={classes.border}>
                    <div className={classes.save}>
                    <img src={Ph} className={classes.phne}  alt="myumg" />
                    <h3>Grow your Knowledge</h3>
                    </div>
                    <div>
                        <p>Set aside the leftover change from everyday purchases
                             by turning on automatic Round-Ups.</p>

                    </div>
                    
                </div>

            </div>
        </div>
     );
}
 
export default Flex;