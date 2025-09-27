import './App.css'
import Navbar from './components/Navbar'
import Home from './assets/routes/Home'
import Website from './assets/routes/Website'
import { Routes, Route } from 'react-router'
import React, { useRef } from 'react'

function App() {
  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    services: useRef(null),
    contact: useRef(null),
  }

  return (
    <>
      <div style={{ paddingTop: '10px' }}>
        <Navbar sectionRefs={sectionRefs} />
        <Routes>
          <Route path="/" element={<Home sectionRefs={sectionRefs} />} />
        </Routes>
      </div>
    </>
  )
}

export default App
