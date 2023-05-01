import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import Scroll from "../Scroll/Scroll"
import Transition from '../Transition/Transition';
import Timing from '../Timing/Timing';
import WillChange from '../WillChange/WillChange';

import "./App.scss"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<HomePage/>}/>
        <Route exact path='/Scroll' element={<Scroll/>}/>
        <Route exact path='/Transition' element={<Transition/>}/>
        <Route exact path='/Timing' element={<Timing/>}/>
        <Route exact path='/WillChange' element={<WillChange/>}/>



      </Routes>
    </BrowserRouter>
  )
}

export default App