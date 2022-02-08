import classes from "./phone.module.css";
import Phne from "../../Assets/phone.png";
const Phone = () => {
    return ( 
        <div className={classes.phone}>
            <div className={classes.item_1}>
                <h3>Save Invest & Earn Anywhere !</h3>
                <p>Ipsum massa at cursus lacus erat lacus</p>
                <p className={classes.mag}>magna volutpat habitasse. Eu mauris et.</p>
                <button>Get Started</button>
            </div>
            <div className={classes.item_2}>
            <img src={Phne} className={classes.phne}  alt="myumg" />

            </div>

        </div>
     );
}
 
export default Phone;