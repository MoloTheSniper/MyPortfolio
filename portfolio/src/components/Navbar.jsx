import React, { useState } from 'react'
import { BiLogoReact } from 'react-icons/bi'
import '../App.css'

const Navbar = ({ sectionRefs }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  const handleScroll = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
    closeMenu()
  }

  return (
    <nav className="navbar">
      {/* Logo */}
      <button className="logo" onClick={() => handleScroll(sectionRefs.home)}>
        <BiLogoReact className="logo-icon" />
        <span className="logo-text">Moloko</span>
      </button>

      {/* Hamburger (visible only on mobile) */}
      <button className="hamburger" onClick={toggleMenu}>
        {isOpen ? '✖' : '☰'}
      </button>

      {/* Nav Links */}
      <div className={`nav-links ${isOpen ? 'active' : ''}`}>
        <button className="nav-link" onClick={() => handleScroll(sectionRefs.home)}>Home</button>
        <button className="nav-link" onClick={() => handleScroll(sectionRefs.about)}>About</button>
        <button className="nav-link" onClick={() => handleScroll(sectionRefs.services)}>Services</button>
        <button className="nav-link" onClick={() => handleScroll(sectionRefs.contact)}>Contact</button>

      </div>
    </nav>
  )
}

export default Navbar
