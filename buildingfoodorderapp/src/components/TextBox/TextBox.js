import React from 'react'
import classes from './TextBox.module.css';

function TextBox() {
    return (
        <div className={classes.box}>
            <h3 className={classes.t1}>Delicious Food , Delieverd to You</h3>
            <p className={classes.t2}>Choose your favorite meal from our broad selection of available meals and enjoy
                a delicious lunch or dinner at home.
            </p>
            <p className={classes.t3}>
                All our meals are cooked with high-quality ingredients,just-in-time and of
                course by experienced
                chefs!
            </p>
        </div>
    )
}

export default TextBox