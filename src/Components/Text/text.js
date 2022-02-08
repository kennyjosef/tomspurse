import classes from "./text.module.css";
import Lock from "../../Assets/lock.png";
const Text = () => {
    return ( 
        <div className={classes.lock}>
            <div className={classes.item}>
            <img src={Lock} className={classes.phne}  alt="myumg" />

            </div>
            <div className={classes.item}>
                <h2>Security that's strong as oak</h2>
                <p className={classes.para}>All your data is protected by bank-level security 
                    and 256-bit encryption.</p>
                <button>Learn More</button>
                <p className={classes.p}>Our Company  non pretium eget etiam tempus. 
                    Vitae sollicitudin in vulputate montes, </p>
            

            </div>
        </div>
     );
}
 
export default Text;