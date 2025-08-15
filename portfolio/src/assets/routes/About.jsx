import React from 'react'
import '../../App.css'
import myselfImg2 from '../../assets/images/me2.png';
export const About = () => {
  return (
    <div>
      <div className="container">
        <div className='box'>
            <img
            src={myselfImg2}
            alt="Myself"
            className="profile-image"
            />
        </div>
        <div className='box'>
            <br/><br/><br/><br/><br/><br/><br/><br/>
            <h1>About Page</h1>
            <p>Hi, I'm a page that is here for temporary reasons. I hope you understand!</p>
        </div>
      </div>
    </div>
  )
}
