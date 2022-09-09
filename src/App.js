import './App.css';
import React from 'react'

function App() {
  return (
    <div className='app-container'>
      <div className='app'>
        <div className='top'>
          <div className='location'>
            <p>Jimma</p>
          </div>
          <div className='temp'>
            <h1>298K</h1>
          </div>
          <div className='description'>
            <p>Clouds</p>
          </div>
       </div>
       <div className='bottom'>
          <div className='feels'>
            <p>298K</p>
          </div>
          <div className='humudity'>
            <p>20%</p>
          </div>
          <div className='wind'>
            <p>12 MPH</p>
          </div>
        </div>
      </div>
   </div>   
  )
}

export default App
