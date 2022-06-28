import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import './Header.css'
import ThemeContext from '../ContextEX/ThemeContext'

function Header() {

    const user = useContext(ThemeContext);

    const z = (user.food[0].amount + user.food[1].amount + user.food[2].amount + user.food[3].amount);

    return (
        <div className='header'>
            <span className='title'>ReactMeals</span>
            <div className='bigC' onClick={user.popup}>
                <span className='icon'><FontAwesomeIcon icon={faCoffee} /></span>
                <span className='cart'>Your Cart</span>
                <span className='number'>{z}</span>
            </div>
        </div>
    )
}

export default Header