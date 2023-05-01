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


        <div>
            <h2>Unwanted Blinks</h2>
            <p>Sometimes the elements blink when u hover them because the cursor is no longer over them when they move and the animation repeats itself<br/>
               very fast making this blink effect, to fix it u need to make the hover effect on the father element that u want to animate, like this : <br/> 
               <strong>.father:hover .child {}</strong> This can be compared with the pink circle above, when the cursor its on its way when moving it begins to blink<br/>
               So hovering the father elements will be the best practice
            </p>

            <div className='Timing-blink-father'>
                <div className='Timing-blink-child'>

                </div>

            </div>
        </div>
    </>
  )
}

export default Timing