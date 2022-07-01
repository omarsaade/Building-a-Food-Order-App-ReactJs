import React, { useContext } from 'react';
import ThemeContext from '../ContextEX/ThemeContext';
import Cart from '../Cart/Cart';
import TotalBox from '../Total/TotalBox';
import './Display.css';

export const DisplayBox = (props) => {
    const user = useContext(ThemeContext)
    const showHideClassName = props.visibility ? "modal display-block" : "modal display-none";


    const foodDisplays = user.Food.map((item) => (
        <Cart
            numb={item.id}
            key={item.id}
            name={item.name}
            amount={item.amount}
            details={item.details}
            price={item.price} />)
    );




    return (
        <div className={showHideClassName}>
            <div className="modal-main">
                <button type="button" className="btn" onClick={() => user.setVisible(false)}>Close</button>
                <div className='bi'>
                    {foodDisplays}
                    <TotalBox />
                </div>
            </div>
        </div>
    );
};

