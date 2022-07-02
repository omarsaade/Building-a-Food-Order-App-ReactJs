import React, { useContext } from 'react'
import ThemeContext from '../ContextEX/ThemeContext';
import classes from './MenuItem.module.css';

function MenuItem(props) {

    const user = useContext(ThemeContext);




    return (
        <div className={classes.menuItem}>
            <div className={classes.first}>
                <span className={classes.name}>{props.name}</span>
                <div>
                    <span className={classes.name}>Amount</span>
                    <input className={classes.amount} min="0" type="number" value={props.amount} onChange={event => user.increaseNumber(props.serialNumber)} />
                </div>
            </div>

            <div className={classes.second}>
                <span className={classes.details}>{props.details}</span>
                <button className={classes.button} onClick={event => user.increaseNumber(props.serialNumber)} >+ Add</button>
            </div>

            <div className={classes.third}>
                <span className={classes.price}>{props.price}$</span>
            </div>
            <hr></hr>
        </div>
    )
}

export default MenuItem;