import React, { useState } from 'react'
import { BiLogoReact } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import '../App.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <nav className="navbar">
      {/* Logo */}
      <Link to="/" className="logo" onClick={closeMenu}>
        <BiLogoReact className="logo-icon" />
        <span className="logo-text">Moloko</span>
      </Link>

      {/* Hamburger (visible only on mobile) */}
      <button className="hamburger" onClick={toggleMenu}>
        {isOpen ? "✖" : "☰"}
      </button>

      {/* Nav Links */}
      <div className={`nav-links ${isOpen ? 'active' : ''}`}>
        <Link to="/" className="nav-link" onClick={closeMenu}>Home</Link>
        <Link to="/about" className="nav-link" onClick={closeMenu}>About</Link>
        <Link to="/services" className="nav-link" onClick={closeMenu}>Services</Link>
        <Link to="/contact" className="nav-link" onClick={closeMenu}>Contact</Link>
        <Link to="/website" className="nav-link" onClick={closeMenu}>Website</Link>
      </div>
    </nav>
  )
}

export default Navbar
