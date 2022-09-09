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
            <p className='bold'>298K</p>
            <p>Feels Like</p>
          </div>
          <div className='humudity'>
            <p className='bold'>20%</p>
            <p>Humidity</p>
          </div>
          <div className='wind'>
            <p className='bold'>12 MPH</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
   </div>   
  )
}

export default App
