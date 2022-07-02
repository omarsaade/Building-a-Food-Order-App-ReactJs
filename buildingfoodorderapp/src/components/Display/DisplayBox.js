import React, { useContext } from 'react';
import ThemeContext from '../ContextEX/ThemeContext';
import Cart from '../Cart/Cart';
import TotalBox from '../Total/TotalBox';
import classes from './DisplayBox.module.css';


export const DisplayBox = (props) => {
    const user = useContext(ThemeContext)



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
        <div className={classes.backdrop}>
            <div className={classes.modalmain} >
                <button type="button" className={classes.btn} onClick={() => user.setVisible(false)}>Close</button>
                <div className={classes.display}>
                    {foodDisplays}
                    <TotalBox />
                </div>
            </div>
        </div>
    );
};

