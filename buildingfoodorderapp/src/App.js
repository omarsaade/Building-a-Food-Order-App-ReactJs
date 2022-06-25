import React, { useState } from 'react'
import Header from './components/Header/Header'
import TextBox from './components/TextBox/TextBox'
import Menu from './components/Menu/Menu'
import './App.css'
import ThemeContext from './components/ContextEX/ThemeContext'



function App() {

  const initialFood = [
    { id: 1, name: 'Sushi', details: 'finest fish and veggies', price: 22.99, amount: 1 },
    { id: 2, name: 'Schntizel', details: 'A german specialty', price: 16.50, amount: 1 },
    { id: 3, name: 'Barbecue Burger', details: 'American , raw , meaty', price: 12.99, amount: 1 },
    { id: 4, name: 'Green Bowl', details: 'Healty..and green..', price: 18.99, amount: 1 },
  ];


  const [food, setFood] = useState(initialFood);



  const addnumber = () => {
    console.log("hello");
    // console.log(food);
    setFood((prevState) => {
      // console.log(prevState);
      return [...prevState];
    });

  }


  return (
    <ThemeContext.Provider value={{ 'addnumbero': addnumber, ordero: food }} >
      <React.Fragment>
        <Header />
        <TextBox />
        <Menu order={food} />
      </React.Fragment>
    </ThemeContext.Provider>
  )

};

export default App;