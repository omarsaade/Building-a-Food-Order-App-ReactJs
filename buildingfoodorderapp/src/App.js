import React, { Fragment, useReducer } from 'react'
import Header from './components/Header/Header'
import TextBox from './components/TextBox/TextBox'
import Menu from './components/Menu/Menu'
import './App.css'


const initialFood = [
  { name: 'Sushi', details: 'finest fish and veggies', price: 22.99, amount: 1 },
  { name: 'Schntizel', details: 'A german specialty', price: 16.50, amount: 1 },
  { name: 'Barbecue Burger', details: 'American , raw , meaty', price: 12.99, amount: 1 },
  { name: 'Green Bowl', details: 'Healty..and green..', price: 18.99, amount: 1 },
];

// function reducer 1
const foodReducer = (state, action) => {

  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.includes('@') };
  }

  return { value: '', isValid: false };
}





function App() {



  const [food, dispatchfood] = useReducer(foodReducer, initialFood);





  return (
    <Fragment>
      <Header />
      <TextBox />
      <Menu />
    </Fragment>
  )
}

export default App