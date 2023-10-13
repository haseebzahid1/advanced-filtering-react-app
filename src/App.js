import React from 'react'
import Nav from './navigation/Nav'
import Products from './Product/Products'
import Recommended from './Recommended/Recommended'
import "./index.css";
const App = () => {
  return (
    <>
    <Nav />
    <Products />
    <Recommended />
    </>
  )
}

export default App