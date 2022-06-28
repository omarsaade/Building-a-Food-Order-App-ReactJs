import React, { useContext } from 'react';
import ThemeContext from '../ContextEX/ThemeContext';
import Cart from '../Cart/Cart';
import Total from '../Total/Total';
import './Display.css';

export const Display = (props) => {
    const user = useContext(ThemeContext)


    const showHideClassName = props.yes ? "modal display-block" : "modal display-none";

    const ourM = user.food.map((m) => (
        <Cart
            z={m.id}
            key={m.id}
            name={m.name}
            amount={m.amount}
            details={m.details}
            price={m.price} />)
    );


    return (
        <div className={showHideClassName}>
            <div className="modal-main">
                <button type="button" onClick={user.handleClose} className="btn">Close</button>
                <div className='bi'>
                    <div>{ourM}</div>
                    <div><Total /></div>
                </div>
            </div>
        </div>
    );
};

