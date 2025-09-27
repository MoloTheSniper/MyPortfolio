import React from 'react'
import '../../App.css'
import myselfImg2 from '../../assets/GIFS/QUESTION1.gif';
import paper1 from '../../assets/images/paper2.png'; 
import javaLogo from '../../assets/images/java.png'; 
import javaScriptLogo from '../../assets/images/javascript.webp'; 
import ReactLogo from '../../assets/react.svg'; 



export const About = () => {
  return (
    <div>
      <br/><br/><br/><br/><br/><br/>
       <h1 className='center-text'><h1 className= "super-heading">About Page</h1></h1>
      <div className="container">
        <div className='box'>
            <img
            src={myselfImg2}
            alt="Myself"
            className="image3"
            />
        </div>
        <div className='box glow-card' style={{height: "450px"}}>  
          <div className='centered-content' style={{paddingLeft:"80px", paddingRight:"80px"}}>    
            <br/>
            <h3 className='centered-text' >Whats up, the name is Moloko and I am the right guy for your digital needs. I am a software developer by profession, and i have over 5 years of working with clients and turning their software needs into reality.
              Be it websites, mobile apps, Logo's etc, i have you covered. All you need to do is tell me what you want and I'll make it happen!</h3>
              <div className="container">
                <div className='box'>
                    <img
                      src={javaLogo}
                      alt="Myself"
                      className="image4"
                    />
                </div>
                <div className='box'>
                    <img
                      src={javaScriptLogo}
                      alt="Myself"
                      className="image4"
                    />
                </div>
                <div className='box'>
                    <img
                      src={ReactLogo}
                      alt="Myself"
                      className="image4"
                    />
                </div>                                
              </div>
          </div> 
        </div>   
      </div>
    </div>
  )
}
