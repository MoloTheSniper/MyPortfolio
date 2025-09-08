import React from 'react'
import { BiCode, BiLogoHtml5, BiLogoReact, BiSolidFileHtml } from 'react-icons/bi'
import { CgWebsite } from "react-icons/cg";
import { SiMaterialdesignicons } from "react-icons/si";
import { LuRotate3D } from "react-icons/lu";
import myselfImg2 from '../../assets/GIFS/PC3.gif';
import phone1 from '../../assets/GIFS/PHONE1.webp';
import diamond from '../../assets/GIFS/DIAMOND.gif';
import paper1 from '../../assets/images/paper2.png'; // ⬅️ import here

const Services = () => {
  return (
    <>
      <h1 className='center-text'>Services</h1>
      <div className='container'>

        <div className='glow-card'>
          <div className='centered-content'>
            <br/>
            <img src={myselfImg2} alt="Myself" className="image2" />
            <br/><br/>
            <h1>Web Development</h1>
            <br/>
            <p>Modern and Responsive website tailored for you.</p><br/>
            <button className="switcher">Tell Me More</button>
          </div>
        </div>

        <div className='glow-card'>
          <div className='centered-content'>
            <br/>
            <img src={phone1} alt="Myself" className="image2" />
            <br/><br/>
            <h1>Mobile App Development</h1>
            <br/>
            <p>Mobile Apps that work on IOS and Android.</p><br/>
            <button className="switcher">Tell Me More</button> 
          </div>
        </div>

        <div className='glow-card'>
          <div className='centered-content'>
            <br/>
            <img src={diamond} alt="Myself" className="image2" />
            <br/><br/>
            <h1>3D Modeling & Rigging</h1>
            <br/>
            <p>High and Low poly models with high res textures.</p><br/>
             <button className="switcher">Tell Me More</button> 
          </div>
        </div>

      </div>
    </>
  )
}

export default Services
