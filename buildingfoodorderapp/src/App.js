import React, { useState } from 'react'
import Header from './components/Header/Header'
import TextBox from './components/TextBox/TextBox'
import Menu from './components/Menu/Menu'
import './App.css'
import ThemeContext from './components/ContextEX/ThemeContext'
import { Display } from './components/Display/Display'




function App() {




  const [food, setFood] = useState([
    { id: 1, name: 'Sushi', details: 'finest fish and veggies', price: 22.99, amount: 1 },
    { id: 2, name: 'Schntizel', details: 'A german specialty', price: 16.50, amount: 1 },
    { id: 3, name: 'Barbecue Burger', details: 'American , raw , meaty', price: 12.99, amount: 1 },
    { id: 4, name: 'Green Bowl', details: 'Healty..and green..', price: 18.99, amount: 1 },
  ]);


  const [visible, setVisible] = useState(false);




  const addnumber = (key) => {
    let newArr = [...food];
    let a = newArr[key - 1];
    a.amount++;
    setFood((prevState) => {
      return [...prevState];
    });
  }


  const popup = () => {
    setVisible(true);
  }

  const handleClose = () => {
    setVisible(false);

  }

  return (
    <ThemeContext.Provider value={{ addnumber, popup, handleClose }} >
      <React.Fragment>
        {visible && <Display yes={visible} />}
        <Header />
        <TextBox />
        <Menu order={food} />
      </React.Fragment>
    </ThemeContext.Provider>
  )

};

export default App;