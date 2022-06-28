import React from 'react'
import './Total.css'

function Total() {
    return (
        <div>
            <div className='c'>
                <span className='total'>Total Amount</span>
                <span className='p'>$72.49</span>
            </div>
            <div className='d'>
                <div></div>
                <div >
                    <button className='close'>Close</button>
                    <button className='order'>Order</button>
                </div>
            </div>
        </div>
    )
}

export default Total