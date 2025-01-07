import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home';
import Cart from './Cart';
import LoginComponent from './LoginComponent';

const App = () => {
  return (
    <>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginComponent />} />    
        <Route path='/cart' element={<Cart/>} />

      </Routes>


    </>
  )
}

export default App
