import { useState } from 'react'
import './index.css'
import { useEffect } from 'react';

export const App = () => {

const [data,setData] = useState(null);
const [search,setSearch] = useState("Mumbai");

useEffect(()=>{
  weatherData();
},[search]);

const API = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=0fecba3c54d9238df018d11d97e697dc`

const weatherData = async() =>{
  try {
    const res = await fetch(API);
    const data = await res.json();
    setData(data.main);
  } catch (error) {
    console.log(error);
  }
  
 
}


  return <section className='section'>


    <div className='body'>
      <div className='search'>
        <input placeholder='enter city name' className='searchbox' value={search} onChange={(event)=> setSearch(event.target.value)}></input>
      </div>

{
  !data ? (
    <p className='error'>No data found.</p>
  ) :(
    <div>
<div className='city'>
        <h1>{search}</h1>
      </div>
      <div className='temp'>
        <h2>{data.temp}°c</h2>
      </div>
      <div className='minmax'>
        <h3>min:{data.temp_min}°c</h3>
        <h3>max:{data.temp_max}°c</h3>
      </div>
      </div>
)}

      
    </div>
  </section>


}
