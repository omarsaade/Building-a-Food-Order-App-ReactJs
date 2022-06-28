import React, { useContext } from 'react'
import './Cart.css'
import ThemeContext from '../ContextEX/ThemeContext'


function Cart(props) {
    const user = useContext(ThemeContext)
    return (
        <div>

            <div className='a'>
                <span className='name'>{props.name}</span>
                <div className='st'>
                    <button className='dec' onClick={event => user.decnumber(props.z)}>-</button>
                    <button className='inc' onClick={event => user.addnumber(props.z)}>+</button>
                </div>
            </div>

            <div className='b'>
                <span className='price'>${props.price}</span>
                <span className='qty'> × {props.amount}</span>
            </div>
            <hr className='hr' />
        </div>
    )
}

export default Cart