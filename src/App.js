import './App.css';
import React, { useState } from 'react'
import axios from 'axios';

function App() {

  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const apiKey = '6ba82cfd5a63c82e9583996928fd44ff';

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=6ba82cfd5a63c82e9583996928fd44ff`

  const searchLocation = (event) => {
    if(event.key === 'Enter'){
      axios.get(url)
    .then((response) => {
      setData(response.data)
      console.log(response.data)
    })
    } 
  } 

  return (
    <div className='app-container'>
      <div className="search">
        <input 
        value={location}
        onChange={event=>setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder='Enter location'
        type="text" />
      </div>
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
