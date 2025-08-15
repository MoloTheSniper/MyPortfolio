import './App.css'
import {  Routes, Route } from "react-router";
import Navbar from './components/Navbar';
import Home from './assets/routes/Home';
import { About } from './assets/routes/About';
import Contact from './assets/routes/Contact';
import React,{useEffect} from 'react';
import Services from './assets/routes/Services';

function App() 
{
  return (
    <>
       
     <div style ={{"padding-top":"10px"}}>
      <Navbar/>
      <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path ='/about' element ={<About/>}/>
        <Route path='/contact' element= {<Contact/>}/>
        <Route path='/services' element= {<Services/>}/>
      </Routes>
     </div>

    </>
  )
}
export default App
