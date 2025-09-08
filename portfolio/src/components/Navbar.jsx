import React from 'react'
import { BiLogoReact } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import '../App.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <BiLogoReact className="logo-icon" />
        <span className="logo-text">Moloko</span>
      </Link>

      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/services" className="nav-link">Services</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
         <Link to="/website" className="nav-link">website</Link>
      </div>
    </nav>
  )
}

export default Navbar
