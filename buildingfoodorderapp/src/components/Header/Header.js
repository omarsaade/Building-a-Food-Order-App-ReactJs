import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import classes from './Header.module.css';
import ThemeContext from '../ContextEX/ThemeContext'

function Header() {

    const user = useContext(ThemeContext);

    const navCart = (user.Food[0].amount + user.Food[1].amount + user.Food[2].amount + user.Food[3].amount);

    return (
        <div className={classes.header}>
            <span className={classes.title}>ReactMeals</span>
            <div className={classes.container} onClick={() => user.setVisible(true)} >
                <span className={classes.icon}><FontAwesomeIcon icon={faCoffee} /></span>
                <span className={classes.cart}>Your Cart</span>
                <span className={classes.number}>{navCart}</span>
            </div>
        </div>
    )
}

export default Header