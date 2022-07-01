import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import './Header.css'
import ThemeContext from '../ContextEX/ThemeContext'

function Header() {

    const user = useContext(ThemeContext);

    const navCart = (user.Food[0].amount + user.Food[1].amount + user.Food[2].amount + user.Food[3].amount);

    return (
        <div className='header'>
            <span className='title'>ReactMeals</span>
            <div className='container' onClick={() => user.setVisible(true)}>
                <span className='icon'><FontAwesomeIcon icon={faCoffee} /></span>
                <span className='cart'>Your Cart</span>
                <span className='number'>{navCart}</span>
            </div>
        </div>
    )
}

export default Header