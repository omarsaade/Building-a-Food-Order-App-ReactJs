import React from 'react'
import './MenuItem.css'

function MenuItem(props) {
    return (
        <div className='menuItem'>
            <div className='first'>
                <span className='name'>{props.name}</span>
                <div>
                    <span className='name'>Amount</span>
                    <span className='amount'>{props.amount}</span>
                </div>
            </div>

            <div className='second'>
                <span className='details'>{props.details}</span>
                <button className='button'>+ Add</button>
            </div>

            <div className='third'>
                <span className='price'>{props.price}$</span>
            </div>
            <hr></hr>
        </div>
    )
}

export default MenuItem