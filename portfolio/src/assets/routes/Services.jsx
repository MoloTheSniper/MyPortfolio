import React from 'react'
import { BiCode, BiLogoHtml5, BiLogoReact, BiSolidFileHtml } from 'react-icons/bi'
import { CgWebsite } from "react-icons/cg";
import { SiMaterialdesignicons } from "react-icons/si";
import { LuRotate3D } from "react-icons/lu";
const  Services =() => {
  return (
    <>
    <h1 className='center-text'>Services</h1>
    <div className='container'>
        <div className='box'>
            <div className='centered-content'>
                <br/>
                <CgWebsite className='icon'/>
                <br/>
                <h1>Web Development</h1>
                <br/>
                <p>Tell me why, its the least you can do for me.</p>
            </div>
        </div>
        <div className='box'>
            <div className='centered-content'>
                 <br/>
                <SiMaterialdesignicons className='icon'/>
                <br/>
                <h1>Graphic Design</h1>
                <br/>
                <p>Tell me why, its the least you can do for me.</p>
            </div>
        </div>
        <div className='box'>
            <div className='centered-content'>
                 <br/>
                <LuRotate3D className='icon'/>
                <br/>
                <h1>3D Modeling</h1>
                <br/>
                <p>Tell me why, its the least you can do for me. This is how things work, i like this job</p>
            </div>
        </div>
        
    </div>
    </>
  )
}

export default Services