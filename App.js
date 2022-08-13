
import './App.css';
import React, { useEffect, useState} from 'react';
import Country from './components/Country';




function App() {

  const [ countrys,setCountrys ] = useState([])
  useEffect(()=>{
    fetch('https://restcountries.com/v2/all')
    .then(res => res.json())
    .then(data => setCountrys(data));
  },[])
  
  console.log(countrys);
  return (
    <div className='conainer'>  
    {
      countrys.map(country => <Country{...country}></Country>)
    }
   
    
    </div>

    
  );
}

export default App;
