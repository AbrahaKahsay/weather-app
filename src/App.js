import './App.css';
import React, { useState } from 'react'
import axios from 'axios';

function App() {

  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const apiKey = '6ba82cfd5a63c82e9583996928fd44ff';

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=6ba82cfd5a63c82e9583996928fd44ff`

  const searchLocation = (event) => {
    if(event.key === 'Enter'){
      axios.get(url)
      .then((response) => {
      setData(response.data)
      console.log(response.data)
      setLocation('')
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
            <p>{data.name}</p>
          </div>
          <div className='temp'>
            {data.main? <h1>{data.main.temp} °C</h1> : null}
          </div>
          <div className='description'>
            {data.weather? <p>{data.weather[0].main}</p> : null }
            {data.weather? <p>{data.weather[0].description}</p> : null }
          </div>
       </div>

       {data.name !=undefined &&
       <div className='bottom'>
       <div className='feels'>
         {data.main?<p className='bold'>{data.main.feels_like} °C</p>:null}
         <p>Feels Like</p>
       </div>
       <div className='humidity'>
       {data.main?<p className='bold'>{data.main.humidity} %</p>:null}
         <p>Humidity</p>
       </div>
       <div className='wind'>
       {data.wind?<p className='bold'>{data.wind.speed} MPH</p>:null}
         <p>Wind Speed</p>
       </div>
     </div>
       }

      </div>
   </div>   
  )
}

export default App
