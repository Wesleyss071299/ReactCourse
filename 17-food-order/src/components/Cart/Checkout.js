import classes from './Checkout.module.css'

const Checkout = (props) => {
    return(
        <form>
            <div className={classes.control}>
                <label htmlFor="">Your Name</label>
                <input type="text" id="name"/>
            </div>
            <div className={classes.control}>
                <label htmlFor="">Street</label>
                <input type="text" id="name"/>
            </div>
        </form>
    )
} 


export default Checkout;