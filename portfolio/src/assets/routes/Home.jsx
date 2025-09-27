import React, { useRef } from 'react'
import '../../App.css'
import me2 from '../../assets/GIFS/PC1.gif'
import { About } from './About'
import Services from './Services'
import Contact from './Contact'

const Home = ({ sectionRefs }) => {
  return (
    <>
      {/*---Start of Left and right Div--- */}
      <div className="container" ref={sectionRefs.home}>
        <div className="box">
          <h1 className="super-heading" style={{ paddingTop: "190px" }}>
            Hi, I am Moloko, Web dev. Imagine it & I'll make it.
          </h1>
          <button
            className="switcher"
            onClick={() => {
              sectionRefs.contact.current?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Contact Me
          </button>
        </div>
        <div className="box">
          <div className="circle">
            <img src={me2} alt="Myself" className="profile-image" />
          </div>
        </div>
      </div>
      {/*---End of Left and right Div--- */}

      <div ref={sectionRefs.about}>
        <About />
      </div>
      <div ref={sectionRefs.services}>
        <Services />
      </div>
      <div ref={sectionRefs.contact}>
        <Contact />
      </div>
    </>
  )
}

export default Home
