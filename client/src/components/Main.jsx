import React from 'react'
import { useState, useEffect } from 'react'
import Player from './Player'
import Results from './Results'

const Main = () => {
  document.documentElement.style.setProperty('--side-card-height', `${(((window.innerHeight - 40) / 7))}px`)
  let display
  let score = {
    'apple': 0,
    'chicken': 0,
    'cheese': 0,
    'bread': 0,
    'pepper': 0,
    'silk': 0,
    'mead': 0,
    'crossbow': 0,
    'greenApples': 0,
    'goldenApples': 0,
    'goudaCheese': 0,
    'bleuCheese': 0,
    'ryeBread': 0,
    'pumpernickelBread': 0,
    'rooster': 0,
    'coins': 0,
    'total': 0,
    'playerNumber': ''
  }
  const [render, setRender] = useState(0)
  const [player1, setPlayer1] = useState({ ...score, playerNumber: 'player1' })
  const [player2, setPlayer2] = useState({ ...score, playerNumber: 'player2' })
  const [player3, setPlayer3] = useState({ ...score, playerNumber: 'player3' })
  const [player4, setPlayer4] = useState({ ...score, playerNumber: 'player4' })
  const [player5, setPlayer5] = useState({ ...score, playerNumber: 'player5' })
  const [player6, setPlayer6] = useState({ ...score, playerNumber: 'player6' })
  const [player7, setPlayer7] = useState({ ...score, playerNumber: 'player7' })
  switch (render) {
    case 1:
      display =
        <div id="player-1-box" style={{ backgroundColor: '#141C27' }} className='main-content-box'>
          <Player setPlayer={setPlayer1} player={player1} />
        </div>
      break;

    case 2:
      display =
        <div id="player-2-box" style={{ backgroundColor: '#5D9260' }} className='main-content-box'>
          <Player setPlayer={setPlayer2} player={player2} />
        </div>
      break;

    case 3:
      display =
        <div id="player-3-box" style={{ backgroundColor: '#5994E2' }} className='main-content-box'>
          <Player setPlayer={setPlayer3} player={player3} />
        </div>
      break;

    case 4:
      display =
        <div id="player-4-box" style={{ backgroundColor: '#A44442' }} className='main-content-box'>
          <Player setPlayer={setPlayer4} player={player4} />
        </div>
      break;

    case 5:
      display =
        <div id="player-5-box" style={{ backgroundColor: '#D1AE5F' }} className='main-content-box'>
          <Player setPlayer={setPlayer5} player={player5} />
        </div>
      break;

    case 6:
      display =
        <div id="player-6-box" style={{ backgroundColor: '#876DBC' }} className='main-content-box'>
          <Player setPlayer={setPlayer6} player={player6} />
        </div>
      break;

    case 7:
      display =
        <div id="player-7-box" style={{ backgroundColor: '#F2F2F2', color: '#111111' }} className='main-content-box'>
          <Player setPlayer={setPlayer7} player={player7} border={1} />
        </div>
      break;
    default:
      display = <div className="main-content-box"><Results player1={player1} player2={player2} player3={player3} player4={player4} player5={player5} player6={player6} player7={player7} /></div>
  }
  return (
    <div id="main">
      <div id="column-one">
        <div className="player-button side-card" style={{ backgroundColor: "#141C27" }} onClick={() => setRender(1)}></div>
        <div className="player-button side-card" style={{ backgroundColor: "#5D9260" }} onClick={() => setRender(2)}></div>
        <div className="player-button side-card" style={{ backgroundColor: "#5994E2" }} onClick={() => setRender(3)}></div>
        <div className="player-button side-card" style={{ backgroundColor: "#A44442" }} onClick={() => setRender(4)}></div>
        <div className="player-button side-card" style={{ backgroundColor: "#D1AE5F" }} onClick={() => setRender(5)}></div>
        <div className="player-button side-card" style={{ backgroundColor: "#876DBC" }} onClick={() => setRender(6)}></div>
        <div className="player-button side-card" style={{ backgroundColor: "#F2F2F2" }} onClick={() => setRender(7)}></div>
        <div className="score-button side-card" onClick={() => setRender(0)}>SCORE</div>
      </div>
      <div id="column-two">
        {display}
      </div>
    </div>
  )
}

export default Main