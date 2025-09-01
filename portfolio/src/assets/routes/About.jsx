import React from 'react'
import '../../App.css'
import myselfImg2 from '../../assets/GIFS/QUESTION1.gif';
import paper1 from '../../assets/images/paper2.png'; 
export const About = () => {
  return (
    <div>
                <h1 className='center-text'>About Page</h1>
      <div className="container">
        <div className='box'>
            <img
            src={myselfImg2}
            alt="Myself"
            className="image3"
            />
        </div>
        <div className='box paper-box' style={{ backgroundImage: `url(${paper1})`, height : "350px" }}>  
          <div className='centered-content'>    
            <br/><br/><br/><br/>
            <h3 className='centered-text'>Whats up, the name is Moloko and I am the right guy for your digital needs. I am a software developer by profession, and i have over 5 years of working with clients and turning their software needs into reality.
              Be it websites, mobile apps, Logo's etc, i have you covered. All you need to do is tell me what you want and I'll make it happen! </h3>
          </div> 
        </div>   
      </div>
    </div>
  )
}
