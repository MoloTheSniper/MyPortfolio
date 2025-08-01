import './App.css'
import {  Routes, Route } from "react-router";
import Navbar from './components/Navbar';
import Home from './assets/routes/Home';
import { About } from './assets/routes/About';
import Contact from './assets/routes/Contact';

function App() 
{
  return (
    <>
     <div className='min-h-screen flex flex-col bg-gray-50'>
      <Navbar/>
      <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path ='/about' element ={<About/>}/>
        <Route path='/contact' element= {<Contact/>}/>
      </Routes>
     </div>
    </>
  )
}
export default App
