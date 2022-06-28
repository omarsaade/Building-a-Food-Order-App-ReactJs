import React, { useContext } from 'react'
import './Total.css'
import ThemeContext from '../ContextEX/ThemeContext';

function Total() {


    const user = useContext(ThemeContext);

    const a = Math.round((user.food[0].amount * user.food[0].price) +
        (user.food[1].amount * user.food[1].price) +
        (user.food[2].amount * user.food[2].price) +
        (user.food[3].amount * user.food[3].price)).toFixed(2);


    return (
        <div>
            <div className='c'>
                <span className='total'>Total Amount</span>
                <span className='p'>${a}</span>
            </div>
            <div className='d'>
                <div></div>
                <div >
                    <button className='close' onClick={user.handleClose}>Close</button>
                    <button className='order'>Order</button>
                </div>
            </div>
        </div>
    )
}

export default Total