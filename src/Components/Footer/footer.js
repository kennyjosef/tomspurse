import classes from './footer.module.css'; 
import Logo13 from '../../Assets/tom.png';
import Logo14 from '../../Assets/fb.png';
import Logo15 from '../../Assets/twit.png';
import Logo16 from '../../Assets/ig.png';
const Footer = () => {
    return ( 
        <div className={classes.footer}>
            <div className={classes.item1}>
                <button>Get Started</button>

            </div>
            <div className={classes.item2}>
                <div>
                <img src={Logo13} className={classes.tom} alt="pic"/>

                </div>
                
                <div className={classes.second}>
                <h4>Company.</h4>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About us</a></li>
                    <li><a href="/">Investment Plan</a></li>
                    <li><a href="/">Mail us</a></li>
                    
                </ul>

                </div>
                <div className={classes.second}>
                    <h4>Product</h4>
                    <ul>
                    <li><a href="/">Saving Plan</a></li>
                    <li><a href="/">Value Plan</a></li>
                    </ul>
                    
                    
                </div>
                <div className={classes.second}>
                <h4>Quick Line</h4>
                <ul>
                <li><a href="/">Create an Account</a></li>
                <li><a href="/">Login </a></li>
                <li><a href="/">Instruction</a></li>
                </ul>
                
                    
                    
                </div>
                <div className={classes.seconds}>
                <h4>Connect</h4>
                <img src={Logo14} className={classes.tom} alt="pic"/>
                <img src={Logo15} className={classes.tom} alt="pic"/>
                <img src={Logo16} className={classes.tom} alt="pic"/>
                <p>support@tompurse.com</p>
                <p>+2348102191530</p>
                <p>Suite C201, Plot 1245 Adetokunbo Ademola Crescent,
                    Wuse 2, Abuja, FCT</p>
                    
                </div>
                
                
            </div>
            <div className={classes.item3}>
                <p>By using this website, you accept our  
                    Terms of Use  and  Privacy Policy  and
                     acknowledge receipt of all disclosures in our  Disclosure Library . All agreements are available in our  Agreement Library. M1 relies on information from various sources believed to be reliable, including clients and third parties, 
                    but cannot guarantee the accuracy
                </p>
                <p>© 2019 TomsPurse Limited. All Rights Reserved.
                </p>
                <p>Designed and Developed By Kenny</p>
                
            </div>
        </div>
     );
}
 
export default Footer;