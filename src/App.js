import React from 'react'
import Nav from './navigation/Nav'
import Products from './Product/Products'
import Recommended from './Recommended/Recommended'

import "./index.css";
import Sidebar from './Sidebar';


const App = () => {
  return (
    <>
    <Sidebar  />
    <Nav />
    <Recommended />
    <Products />
    
    </>
  )
}

export default App