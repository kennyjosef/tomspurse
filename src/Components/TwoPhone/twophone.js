import Logo6 from '../../Assets/frm.png';
import Logo5 from '../../Assets/new.png';
import Logo7 from '../../Assets/app.png';
import Logo8 from '../../Assets/google.png';
import classes from './twophone.module.css';
const TwoPhone = () => {
    return (
        <div className={classes.phone}>
            <div className={classes.name}>
            <img src={Logo5} className={classes.frame} alt="alt"/>
            <img src={Logo6} className={classes.frm} alt= "img"/>
            </div>

            <div className={classes.google}>
                <h1>Simple and Brief</h1>
                <p>psum massa at cursus lacus erat lacuspsum massa at 
                    cursus lacus erat psum massa at cursus lacus erat lacus
                    lacuspsum massa at cursuspsumpsum massa at cursus lacus erat lacus
                     massa at cursus lacus erat lacus lacus erat lacus</p>
                
            
                <div className={classes.side}>
                    <img src={Logo8} className={classes.ap} alt='img'/>
                    <img src={Logo7} className={classes.app} alt='img'/>
                    
                </div>
            </div>

        </div>
      );
}
 
export default TwoPhone;