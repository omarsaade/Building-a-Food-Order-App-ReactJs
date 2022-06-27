import React, { useContext, useRef, useEffect } from 'react'
import ThemeContext from '../ContextEX/ThemeContext';
import './MenuItem.css'

function MenuItem(props) {

    const user = useContext(ThemeContext);




    return (
        <div className='menuItem'>
            <div className='first'>
                <span className='name'>{props.name}</span>
                <div>
                    <span className='name'>Amount</span>
                    <input className='amount' type="number" value={props.amount} onChange={event => user.addnumber(props.z)} />
                </div>
            </div>

            <div className='second'>
                <span className='details'>{props.details}</span>
                <button className='button' onClick={event => user.addnumber(props.z)} >+ Add</button>
            </div>

            <div className='third'>
                <span className='price'>{props.price}$</span>
            </div>
            <hr></hr>
        </div>
    )
}

export default MenuItem;