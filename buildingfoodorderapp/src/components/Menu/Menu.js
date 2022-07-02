import React from 'react'
import classes from './Menu.module.css';
import MenuItem from './MenuItem'






function Menu(props) {



    const list = props.order.map((ord) => (
        <MenuItem serialNumber={ord.id} key={ord.id} name={ord.name} amount={ord.amount} details={ord.details} price={ord.price} />)
    );


    return (
        <div className={classes.menu}>
            {list}
        </div>
    )
}

export default Menu