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

        <div className='squares'>
          <div className='rotate'>Rotate</div>
          <div className='scale'>Scale</div>
          <div className='skew'>Skew</div>
          {/* <div className='matrix'>Matrix</div> */}
        </div>
        
      </div>
    </div>
  )
}

export default App