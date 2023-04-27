import React from 'react'
import { Link } from 'react-router-dom';

import "./Scroll.scss"

const Scroll = () => {
  return (
    <>
      <Link to={"/"}>Home</Link>
      <div className='parallax-container'>
        
        <div className='image image__background'>
          <img src="https://i.ibb.co/jbLKgvX/Background.png" alt="" />
        </div>

        <div className='image image__middle'>

          <div className='card one'></div>
          <div className='card two'></div>
          <div className='card three'></div>

        </div>

        <div className='image image__foreground'>
          <img src="https://i.ibb.co/vJdbRkj/Alice.png" alt="" />
        </div>


      </div>
    </>
  )
}

export default Scroll