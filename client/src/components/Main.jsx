import React from 'react'
import Player from './Player'

const Main = () => {
  let total = 0
  let apple = 0,
    chicken = 0,
    cheese = 0,
    bread = 0,
    pepper = 0,
    silk = 0,
    mead = 0,
    crossbow = 0,
    greenApples = 0,
    goldenApples = 0,
    goudaCheese = 0,
    bleuCheese = 0,
    ryeBread = 0,
    pumpernickelBread = 0,
    rooster = 0

    function getTotal() {
      total = (apple * 2) + (chicken * 4) + (cheese * 3) + (bread * 3) + (pepper * 6) + (silk * 7) + (mead * 8) + (crossbow * 9) + (greenApples * 4) + (goldenApples * 6) + (goudaCheese * 6) + (bleuCheese * 9) + (ryeBread * 6) + (pumpernickelBread * 9) + (rooster * 8)
  }
  return (
    <div id="main">
      <div id="column-one">
        <div className="player">Player 1</div>
        <div className="player">Player 2</div>
        <div className="player">Player 3</div>
        <div className="player">Player 4</div>
        <div className="player">Player 5</div>
        <div className="player">Player 6</div>
        <div className="player">Player 7</div>
      </div>
      <div id="column-two">
        <div id="row-one"><Player /></div>
        <div id="row-two"></div>
      </div>
    </div>
  )
}

export default Main