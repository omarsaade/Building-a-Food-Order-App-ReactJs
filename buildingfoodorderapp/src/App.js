import React, { Fragment, useContext } from 'react'
import Header from './components/Header/Header'
import TextBox from './components/TextBox/TextBox'
import Menu from './components/Menu/Menu'
import './App.css'
import ThemeContext from './components/ContextEX/ThemeContext'
import { DisplayBox } from './components/Display/DisplayBox'





function App() {
  const ctx = useContext(ThemeContext);




  return (
    <Fragment>
      {ctx.visible && <DisplayBox visibility={ctx.visible} />}
      <Header />
      <TextBox />
      <Menu order={ctx.Food} />
    </Fragment>
  )

};

export default App;