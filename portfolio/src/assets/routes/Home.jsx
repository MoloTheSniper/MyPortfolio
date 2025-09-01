import React, { useRef } from 'react'
import '../../App.css'
import me2 from '../../assets/GIFS/PC1.gif';
import paper1 from '../../assets/images/paper1.webp'
import { About } from './About';
import Services from './Services';
import Contact from './Contact';

const Home = () => {
  const gamesRef = useRef(null)

  const games = [

    {
      title: 'Red Dead Redemption 2',
      description: 'An epic tale of life in America’s unforgiving heartland.',
      img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg',
    },
    {
      title: 'Cyberpunk 2077',
      description: 'Futuristic RPG in the city of Night City.',
      img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg',
    },
  ]

  return (
    <>

    {/*---Start of Left and right Div--- */}
    <div className="container">
      <div className="box">
        <br/>
        <br/>
        <br/>
        <h1 className ="super-heading" style={{"padding-top":"190px"}}>Hi,
        I am Moloko, Web dev. Imagine it & I'll make it.</h1>
        <br/>
          <button
            className="switcher"
            onClick={() => {
              gamesRef.current?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Contact Me
          </button>
      </div>
        <div className="box">
            <br/> <br/> <br/>
            <div className='circle'>
                <img
                src={me2}
                alt="Myself"
                className="profile-image"
                />
            </div>
        </div>
    </div>
    {/*---End of Left and right Div--- */}
    <div>
        <About/>
    </div>
    <div>
        <Services/>
    </div>
    <div>
        <Contact/>
    </div>
    </>
  )
}

export default Home
