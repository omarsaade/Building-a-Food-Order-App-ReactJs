import React from 'react'
import './Menu.css'
import MenuItem from './MenuItem'






function Menu(props) {
    return (
        <div className='menu'>
            {props.order.map(expense =>
                <MenuItem
                    key={expense.id}
                    name={expense.name}
                    amount={expense.amount}
                    details={expense.details}
                    price={expense.price} />
            )}
        </div>
    )
}

export default Menu