import Logo10 from '../../Assets/back.png';
import Logo11 from '../../Assets/front.png';
import Logo12 from '../../Assets/point.png';
import classes from "./arrow.module.css";

const Arrow = () => {
    return ( 
        <div className={classes.overall}>
            <div className={classes.flex}>
            <div className={classes.item1}>
                <img src={Logo10} className={classes.arrow} alt="pic"/>
                <p className={classes.para}>See what others have to say</p>
                <img src={Logo11} className={classes.arrow} alt="pic"/>
            </div>
            <div className={classes.item2}>
                <img src={Logo12} className={classes.point} alt="pic"/>
                <img src={Logo12} className={classes.point} alt="pic"/>
                <img src={Logo12} className={classes.point} alt="pic"/>
            </div>
            </div>
        </div>
     );
}
 
export default Arrow;