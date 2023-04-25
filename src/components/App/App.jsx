import React from 'react'

import "./App.scss"

const App = () => {
  return (
    <div className='App'>
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
          

        </div>


        
      </div>
    </div>
  )
}

export default App