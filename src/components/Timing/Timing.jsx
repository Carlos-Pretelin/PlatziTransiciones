import React from 'react'
import "./Timing.scss"
import Menu from '../Menu/Menu'

const Timing = () => {
  return (
    <>
        <Menu/>
        <div className='Timing-container'>

        <div className='Timing-container-circle'></div>
        <div className='Timing-container-circle'></div>
        <div className='Timing-container-circle'></div>
        <div className='Timing-container-circle'></div>
        <div className='Timing-container-circle'></div>
        <div className='Timing-container-circle'></div>

        </div>


        <div>
            <h2>Movement impulse by action</h2>

                <div className='impulsed'>

                </div>
                <p>Basically this circle has 2 properties of translate, one in its own class  and another when u hover it, creating this difference<br/>
                   in how fast the ball returns to its original position, compared to how fast it goes when u hover it 
                </p>
        </div>
    </>
  )
}

export default Timing