import React, { Fragment, useContext } from 'react'
import './Total.css'
import ThemeContext from '../ContextEX/ThemeContext';

function TotalBox() {
    const user = useContext(ThemeContext);

    const totalPrice = Math.round((user.Food[0].amount * user.Food[0].price)
        + (user.Food[1].amount * user.Food[1].price) + (user.Food[2].amount * user.Food[2].price)
        + (user.Food[3].amount * user.Food[3].price)).toFixed(2);



    return (
        <Fragment>
            <div className='c'>
                <span className='total'>Total Amount</span>
                <span className='p'>{totalPrice}</span>
            </div>
            <div className='d'>
                <div></div>
                <div >
                    <button className='close' onClick={() => user.setVisible(false)}>Close</button>
                    <button className='order'>Order</button>
                </div>
            </div>
        </Fragment>
    )
}

export default TotalBox