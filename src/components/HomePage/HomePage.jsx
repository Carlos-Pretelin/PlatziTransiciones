import React from 'react'
import { Link } from 'react-router-dom';

import "../HomePage/HomePage.scss"
const HomePage = () => {
  return (
    
    <div className='App'>
      
      <Link to={"/Scroll"}>Alice Scroll</Link>
      <Link to={"/Transition"}>Transition</Link>

      <p>Hello World</p>
      <a href="" className='firstName'>Carlos</a>
      <a href="">Luis</a>


      <div className='container'>

        <div>Container Child 1</div>
        <div>Container Child 2</div>
        <div>Container Child 3</div>


      </div>


      <div >
        <div className='circle'>
          <div className='shadow'></div>
        </div>

        <div >

          <h1>Transform</h1>

          <div className='squares'>      
            <div className='rotate'>Rotate</div>
            <div className='scale'>Scale</div>
            <div className='skew'>Skew</div>
            {/* <div className='matrix'>Matrix</div> */}
          </div>

          <h1>Transform origin</h1>
          <p>The origin of the transformation is changed from the center of the element, to the top right corner</p>
          <div className='squares ' >
            <div className='rotate transformOrigin'>Rotate 2</div>
            <div className='scale transformOrigin'>Scale</div>
            <div className='skew transformOrigin'>Skew</div>
          </div>

          <h1>Transform style and Perspective</h1>
          <p>The child element is tilted backwards because of the use of the perspective property</p>

          <div className='perspective-container'>
              <div className='perspective-item'>

              </div>
          </div>

          <h1>Backface visibility</h1>
          <p>
            Here is a little more complicated, first when i hover over the Container the "card" element,<br/> 
            both the front and the back will flip to their "back" side, but nothing will show, because i set the<br/> 
            backface visibility to hidden, so i needed to flip the "back" section before hand so when i hover over <br/>
            the "card", the "front" side will be hidden because ur seeing the hidden backface, but now ur seeing the front <br/>
            of the "back" side of the card (sounds more complicated that it is).
          </p>

          <div className='card'>
            <div className='card-front'> "Front" of the card</div>
            <div className='card-back'> "Back" of the card</div>
          </div>
          

        </div>


        
      </div>
    </div>
  )
}

export default HomePage