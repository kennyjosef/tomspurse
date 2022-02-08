import Logo1 from "../../Assets/logo.png";
import classes from "./header.module.css";
const Header = () => {
    return ( 
        <nav className={classes.header}>     
            <div className={classes.pic}>
                 <img src={Logo1} className={classes.logo}  alt="myumg" />
            </div>
            
            <div className={classes.nav}>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/About">About Us</a></li>
                    <li><a href="/">Invest</a></li>
                </ul>
            </div>

            <div className={classes.button}>
                 <button className={classes.item_1}>Log In</button>
                 <button className={classes.item_2}>Get Started</button>
            </div>
            
            
        </nav>
     );
}
 
export default Header;