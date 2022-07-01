import React, { useState } from 'react'
import Header from './components/Header/Header'
import TextBox from './components/TextBox/TextBox'
import Menu from './components/Menu/Menu'
import './App.css'
import ThemeContext from './components/ContextEX/ThemeContext'
import { DisplayBox } from './components/Display/DisplayBox'




function App() {

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







  return (
    <ThemeContext.Provider value={{ increaseNumber, decreaseNumber, setVisible, visible, Food }} >
      {visible && <DisplayBox visibility={visible} />}
      <Header />
      <TextBox />
      <Menu order={Food} />
    </ThemeContext.Provider>
  )

};

export default App;