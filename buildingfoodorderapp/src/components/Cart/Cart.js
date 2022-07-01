import React, { Fragment, useContext } from 'react'
import './Cart.css'
import ThemeContext from '../ContextEX/ThemeContext'


function Cart(props) {
    const user = useContext(ThemeContext)
    return (
        <Fragment>
            <div className='a'>
                <span className='name'>{props.name}</span>
                <div className='st'>
                    <button className='dec' onClick={event => user.decreaseNumber(event, props.numb)}>-</button>
                    <button className='inc' onClick={event => user.increaseNumber(props.numb)}>+</button>
                </div>
            </div>

            <div className='b'>
                <span className='price'>${props.price}</span>
                <span className='qty'> × {props.amount}</span>
            </div>
            <hr className='hr' />
        </Fragment>
    )
}

export default Cart