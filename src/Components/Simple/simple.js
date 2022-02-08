import classes from './simple.module.css';
const Simple = () => {
    const clicKHandler=()=>{
        console.log("was clicked")
    }
    return ( 
        <div className={classes.general}>
            <h2>Simple, Transparent Plans</h2>
            <div className={classes.overall }>
                <div className={classes.item_1}>
                    <div className={classes.div}>
                    <h3>Basic</h3>
                    <h4>7% for 2month</h4>
                    <p>Set aside the leftover change from everyday 
                        purchases by turning on automatic Round-Ups.
                    </p>
                    <button>Get Started</button>
                    </div>
                    <div className={classes.what}>
                     <p>What’s Inculded</p>
                     <p><a href="/" onClick={clicKHandler}>+</a></p>
                    </div>

                </div>
                <div className={classes.item_1}>
                    <div className={classes.div}>
                    <h3>Plans</h3>
                    <h4>22% for 6month</h4>
                    <p>Set aside the leftover change from everyday purchases by 
                        turning on automatic Round-Ups.
                    </p>
                        <button>Get Started</button>
                    </div>
                    <div className={classes.what}>
                         <p>What’s Inculded</p>
                        <p><a href="/" onClick={clicKHandler}>+</a></p>
                     </div>

                </div>
            </div>
            
        </div>
    );
}
 
export default Simple;