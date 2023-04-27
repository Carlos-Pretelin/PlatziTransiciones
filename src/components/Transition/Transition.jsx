import React from 'react'
import { Link } from 'react-router-dom';


import "./Transition.scss"

const Transition = () => {
  return (

    <>
        <div className='Transition-container'>
            <div className='Transition-Box'>Box 1</div>
            <div className='Transition-Box'>Box 2</div>
            <div className='Transition-Box'>Box 3</div>
        </div>

        <div className='Test-menu'>
            <div>
                <Link to={"/"}>Home</Link>
            </div>

            <div>
                <Link   Link to={"/Scroll"}>Scroll</Link>
            </div>

            <div>
            <Link to={"/Timing"}>Timing</Link>
            </div>
            

        </div>
    </>
  )
}

export default Transition