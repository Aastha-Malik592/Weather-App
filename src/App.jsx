import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

const App = () => {
  const [city,setCity]=useState('')
  const [error,setError]=useState('')
  const [weather,setWeather]=useState(null)
  const [loading,setLoading]=useState(false)
 const API_KEY="8c30163c8cbd4eeaaa0140040262605"
  // console.log(city)
const today = new Date().toDateString()
  const getweather=async()=>{
    setError("")
setWeather(null)
setLoading(true)
    
  const url=`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`
try{

  const response=await axios.get(url)
  // console.log(response.data)
    setWeather(response.data)
  }

  catch{
setError("city not found")
  }
  finally{
    setLoading(false)
  }

  }




  return (
    <div>
      <div className='logo'>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF7LThne1oiSixSMi-C6LWIa2H4B460mP07g&s"></img>
</div>
      <div className='searchBar'>
        <input placeholder='Search Here'  value={city}
         onChange={(e)=>{
    setCity(e.target.value)

  }}
  >
     
</input>
<button onClick={()=>{
  getweather()
}}>Search</button>

      </div>
      {loading && <h2>Loading...</h2>}
     {error&&(<h2>City not found</h2>)}
    
   {weather && (
  <div className='weatherCard'>
 <img 
      src={weather.current.condition.icon} 
      alt="weather icon"
    />

    <div className='weatherLeft'>
      <h1>{weather.current.temp_c}°C</h1>
    </div>

    <div className='weatherRight'>
      <h2>{weather.location.name}</h2>
      <p>{weather.current.condition.text}</p>
      <p>{today}</p>
    </div>

  </div>
)}
    </div>
  )
}

export default App
