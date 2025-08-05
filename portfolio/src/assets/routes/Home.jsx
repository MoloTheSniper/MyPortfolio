import React, { useRef } from 'react'
import '../../App.css'
import myselfImg from '../../assets/images/myself.png';

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
    <div style={{'padding-top': '70px'}}>
        <div>
          <button
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            onClick={() => {
              gamesRef.current?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Jump to Games
          </button>
        </div>

        <div ref={gamesRef} id="games">
        <img
            src={myselfImg}
            alt="Myself"
            className="w-32 h-20 object-cover rounded-md flex-shrink-0"
            />

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
    </div>
  )
}

export default Home
