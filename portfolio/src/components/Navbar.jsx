import React from 'react'
import { BiLogoReact } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import '../App.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <BiLogoReact className="logo-icon" />
        <span className="logo-text">React Router</span>
      </Link>

      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar
