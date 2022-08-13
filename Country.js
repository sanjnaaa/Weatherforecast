import React from 'react'
import './Country.css'

function Country({name,flag,capital,population,latlng}) {
  return (
    <div>
     <div className='image'>
       <img src={flag} alt="flag"/>

     </div>
     <div className='Country-details'>
       <h2>{name}</h2>
       <p>Population : {population}</p>
       <p>LatLong : {latlng}</p>
       <p><a href="C:\Users\MY PC\weather\src\module\WeatherComponent.js" target="_blank">
       <button> Capital: {capital} </button>
   </a>
</p>       
     </div>
    </div>
  )
}

export default Country