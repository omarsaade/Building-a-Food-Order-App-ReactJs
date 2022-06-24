import React from 'react'
import './MenuItem.css'

function MenuItem() {
    return (
        <div className='menuItem'>
            <div className='first'>
                <span className='name'>Sushi</span>
                <div>
                    <span className='name'>Amount</span>
                    <span className='amount'> 1</span>
                </div>
            </div>

            <div className='second'>
                <span className='details'>Finest fish and veggies</span>
                <button className='button'>+ Add</button>
            </div>

            <div className='third'>
                <span className='price'>22.99$</span>
            </div>
            <hr></hr>
        </div>
    )
}

export default MenuItem