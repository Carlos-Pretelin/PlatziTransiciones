import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import Scroll from "../Scroll/Scroll"

import "./App.scss"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<HomePage/>}/>
        <Route exact path='/Scroll' element={<Scroll/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App