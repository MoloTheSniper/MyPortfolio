import React, { useRef } from 'react'
import '../../App.css'
import me2 from '../../assets/images/Me2.png';
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
        <h1 className ="super-heading" style={{"padding-top":"120px"}}>Hi,
        I am Moloko, Web developer.</h1>
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
     <div ref={gamesRef} id="games">


          <h2 className="text-2xl font-bold mb-6">Games</h2>
          <div className="flex flex-col gap-6 overflow-y-auto max-h-[600px]">
            {games.map((game, idx) => (
              <div
                key={idx}
                className="flex gap-4 p-4 bg-white rounded shadow-md items-start"
              >
                <img
                  src={game.img}
                  alt={game.title}
                  className="w-32 h-20 object-cover rounded-md flex-shrink-0"
                />
                <div className="flex flex-col justify-center">
                  <h3 className="text-lg font-semibold mb-1">{game.title}</h3>
                  <p>{game.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={{'padding-top': '70px','padding-bottom': '70px'}}>
        <div>
            <br/>
          <button
            className="switcher"
            onClick={() => {
              gamesRef.current?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Jump to Games
          </button>
        </div>
    </div>
    </>
  )
}

export default Home
