import classes from './zero.module.css';
import Logo1 from "../../Assets/Group.png";
import Logo3 from '../../Assets/v1.png';
import Logo2 from '../../Assets/Vector.png';

const Zero = () => {
    return ( 
        <div className={classes.general} >
            <h2>Zero Commissions</h2>
            <p className={classes.p}>Our Company  non pretium eget etiam tempus. 
                Vitae sollicitudin in vulputate montes, </p>
            <div className={classes.overall}>
                <div className={classes.item_1}>
                <img src={Logo1} className={classes.group}  alt="myumg" />
                <h3>Financial Stablity</h3>
                <p className={classes.p2}>Our Payment gateway is secured with military grade encryption </p>

                </div>
                <div className={classes.item_2}>
                <img src={Logo2} className={classes.group}  alt="myumg" />
                <h3>Swift Payment</h3>
                <p className={classes.p1}>Our Payment gateway is secured with military grade encryption </p>

                </div>
                <div className={classes.item_3}>
                <img src={Logo3} className={classes.group}  alt="myumg" />
                <h3>Easy to Use</h3>
                <p className={classes.p1}>Our Payment gateway is secured with military grade encryption </p>

                </div>
            </div>
        </div>
     );
}
 
export default Zero;