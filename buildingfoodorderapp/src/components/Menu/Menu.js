import React from 'react'
import './Menu.css'
import MenuItem from './MenuItem'




function Menu(props) {



    const ourMenu = props.order.map((ord) => (
        <MenuItem
            z={ord.id}
            key={ord.id}
            name={ord.name}
            amount={ord.amount}
            details={ord.details}
            price={ord.price} />)
    );


    return (
        <div className='menu'>
            {ourMenu}
        </div>
    )
}

export default Menu