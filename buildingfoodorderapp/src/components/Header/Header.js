import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import './Header.css'

function Header() {
    return (
        <div className='header'>
            <span className='title'>ReactMeals</span>
            <div className='bigC'>
                <span className='icon'><FontAwesomeIcon icon={faCoffee} /></span>
                <span className='cart'>Your Cart</span>
                <span className='number'>0</span>
            </div>
        </div>
    )
}

export default Header