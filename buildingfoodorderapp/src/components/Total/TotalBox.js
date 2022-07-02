import React, { Fragment, useContext } from 'react'
import classes from './TotalBox.module.css';
import ThemeContext from '../ContextEX/ThemeContext';

function TotalBox() {
    const user = useContext(ThemeContext);

    const totalPrice = Math.round((user.Food[0].amount * user.Food[0].price)
        + (user.Food[1].amount * user.Food[1].price) + (user.Food[2].amount * user.Food[2].price)
        + (user.Food[3].amount * user.Food[3].price)).toFixed(2);



    return (
        <Fragment>
            <div className={classes.totalb}>
                <span className={classes.total}>Total Amount</span>
                <span className={classes.price}>{totalPrice}</span>
            </div>
            <div className={classes.d}>
                <div></div>
                <div >
                    <button className={classes.close} onClick={() => user.setVisible(false)}>Close</button>
                    <button className={classes.order}>Order</button>
                </div>
            </div>
        </Fragment>
    )
}

export default TotalBox