import React, { Fragment, useContext } from 'react'

import classes from './Cart.module.css';
import ThemeContext from '../ContextEX/ThemeContext'


function Cart(props) {
    const user = useContext(ThemeContext)
    return (
        <Fragment>
            <div className={classes.cart}>
                <span className={classes.name}>{props.name}</span>
                <div className={classes.state}>
                    <button className={classes.dec} onClick={event => user.decreaseNumber(event, props.numb)}>-</button>
                    <button className={classes.inc} onClick={event => user.increaseNumber(props.numb)}>+</button>
                </div>
            </div>

            <div className={classes.priceamount}>
                <span className={classes.price}>${props.price}</span>
                <span className={classes.qty}> × {props.amount}</span>
            </div>
            <hr className={classes.hr} />
        </Fragment>
    )
}

export default Cart