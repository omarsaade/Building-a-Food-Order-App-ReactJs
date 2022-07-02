import React, { useState } from 'react'

const ThemeContext = React.createContext({

    increaseNumber: (key) => { },
    decreaseNumber: (event, key) => { },
    popup: () => { },
    stop: () => { },
    Food: '',
    visible: ''
});




export const AuthContextProvider = (props) => { //named export


    const [Food, setFood] = useState([
        { id: 1, name: 'Sushi', details: 'finest fish and veggies', price: 22.99, amount: 0 },
        { id: 2, name: 'Schntizel', details: 'A german specialty', price: 16.50, amount: 0 },
        { id: 3, name: 'Barbecue Burger', details: 'American , raw , meaty', price: 12.99, amount: 0 },
        { id: 4, name: 'Green Bowl', details: 'Healty..and green..', price: 18.99, amount: 0 },
    ]);

    const [visible, setVisible] = useState(false);




    const increaseNumber = (key) => {
        let newArr = [...Food];
        let selectedFood = newArr[key - 1];
        selectedFood.amount++;
        setFood((prevState) => { return [...prevState]; });
    }




    const decreaseNumber = (event, key) => {
        let newArr = [...Food];
        let selectedFood = newArr[key - 1];
        if (selectedFood.amount > 0) {
            selectedFood.amount--;
            setFood((prevState) => { return [...prevState]; });
        } else {
            event.preventDefault();
        }
    }




    return <ThemeContext.Provider value={{ increaseNumber, decreaseNumber, setVisible, visible, Food }}>
        {props.children}
    </ThemeContext.Provider >
}






export default ThemeContext