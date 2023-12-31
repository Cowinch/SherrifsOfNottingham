import React from 'react'
import ItemCard from './ItemCard'

const Player = ({ setPlayer, player, border }) => {
    if(border === 1) {
        document.documentElement.style.setProperty('--border-color', `black`)
    } else {
        document.documentElement.style.setProperty('--border-color', `white`)
    }
    return (
        <div className='point-container'>
            <ItemCard item={player.apple} setItem={setPlayer}/>

            <div className="point-box">
                <p>Chicken: {player.chicken}</p>
                <div className='clicker-box'>
                    <div className="clicker" onClick={() => setPlayer(player => ({...player, chicken:player.chicken+1}))}>+</div>
                    <div className="clicker" onClick={() => setPlayer(player => ({...player, chicken:player.chicken-1}))}>-</div>
                </div>
            </div>

            <div className="point-box">
                <p>Cheese: {player.cheese}</p>
                <div className='clicker-box'>
                    <div className="clicker" onClick={() => setPlayer(player => ({...player, cheese:player.cheese+1}))}>+</div>
                    <div className="clicker" onClick={() => setPlayer(player => ({...player, cheese:player.cheese-1}))}>-</div>
                </div>
            </div>

            <div className="point-box">
                <p>Bread: {player.bread}</p>
                <div className='clicker-box'>
                    <div className="clicker" onClick={() => setPlayer(player => ({...player, bread:player.bread+1}))}>+</div>
                    <div className="clicker" onClick={() => setPlayer(player => ({...player, bread:player.bread-1}))}>-</div>
                </div>
            </div>

            <div className="point-box">
                <p>Pepper: {player.pepper}</p>
                <div className='clicker-box'>
                    <div className="clicker" onClick={() => setPlayer(player => ({...player, pepper:player.pepper+1}))}>+</div>
                    <div className="clicker" onClick={() => setPlayer(player => ({...player, pepper:player.pepper-1}))}>-</div>
                </div>
            </div>

            <div className="point-box">
                <p>Silk: {player.silk}</p>
                <div className='clicker-box'>
                    <div className="clicker" onClick={() => setPlayer(player => ({...player, silk:player.silk+1}))}>+</div>
                    <div className="clicker" onClick={() => setPlayer(player => ({...player, silk:player.silk-1}))}>-</div>
                </div>
            </div>

            <div className="point-box">
                <p>Mead: {player.mead}</p>
                <div className='clicker-box'>
                    <div className="clicker" onClick={() => setPlayer(player => ({...player, mead:player.mead+1}))}>+</div>
                    <div className="clicker" onClick={() => setPlayer(player => ({...player, mead:player.mead-1}))}>-</div>
                </div>
            </div>

            <div className="point-box">
                <p>Crossbow: {player.crossbow}</p>
                <div className='clicker-box'>
                    <div className="clicker" onClick={() => setPlayer(player => ({...player, crossbow:player.crossbow+1}))}>+</div>
                    <div className="clicker" onClick={() => setPlayer(player => ({...player, crossbow:player.crossbow-1}))}>-</div>
                </div>
            </div>

            <div className="point-box">
                <p>Green Apples: {player.greenApples}</p>
                <div className='clicker-box'>
                    <div className="clicker" onClick={() => setPlayer(player => ({...player, greenApples:player.greenApples+1}))}>+</div>
                    <div className="clicker" onClick={() => setPlayer(player => ({...player, greenApples:player.greenApples-1}))}>-</div>
                </div>
            </div>

            <div className="point-box">
                <p>Golden Apples: {player.goldenApples}</p>
                <div className='clicker-box'>
                    <div className="clicker" onClick={() => setPlayer(player => ({...player, goldenApples:player.goldenApples+1}))}>+</div>
                    <div className="clicker" onClick={() => setPlayer(player => ({...player, goldenApples:player.goldenApples-1}))}>-</div>
                </div>
            </div>

            <div className="point-box">
                <p>Gouda Cheese: {player.goudaCheese}</p>
                <div className='clicker-box'>
                    <div className="clicker" onClick={() => setPlayer(player => ({...player, goudaCheese:player.goudaCheese+1}))}>+</div>
                    <div className="clicker" onClick={() => setPlayer(player => ({...player, goudaCheese:player.goudaCheese-1}))}>-</div>
                </div>
            </div>

            <div className="point-box">
                <p>Bleu Cheese: {player.bleuCheese}</p>
                <div className='clicker-box'>
                    <div className="clicker" onClick={() => setPlayer(player => ({...player, bleuCheese:player.bleuCheese+1}))}>+</div>
                    <div className="clicker" onClick={() => setPlayer(player => ({...player, bleuCheese:player.bleuCheese-1}))}>-</div>
                </div>
            </div>

            <div className="point-box">
                <p>Rye Bread: {player.ryeBread}</p>
                <div className='clicker-box'>
                    <div className="clicker" onClick={() => setPlayer(player => ({...player, ryeBread:player.ryeBread+1}))}>+</div>
                    <div className="clicker" onClick={() => setPlayer(player => ({...player, ryeBread:player.ryeBread-1}))}>-</div>
                </div>
            </div>

            <div className="point-box">
                <p>Pumpernickel: {player.pumpernickelBread}</p>
                <div className='clicker-box'>
                    <div className="clicker" onClick={() => setPlayer(player => ({...player, pumpernickelBread:player.pumpernickelBread+1}))}>+</div>
                    <div className="clicker" onClick={() => setPlayer(player => ({...player, pumpernickelBread:player.pumpernickelBread-1}))}>-</div>
                </div>
            </div>

            <div className="point-box">
                <p>Rooster: {player.rooster}</p>
                <div className='clicker-box'>
                    <div className="clicker" onClick={() => setPlayer(player => ({...player, rooster:player.rooster+1}))}>+</div>
                    <div className="clicker" onClick={() => setPlayer(player => ({...player, rooster:player.rooster-1}))}>-</div>
                </div>
            </div>
            <div className="point-box">
                <label htmlFor="">Coins: </label>
                <input type="number" value={player.coins} onChange={(e) => setPlayer({...player, coins: e.target.valueAsNumber})} />
            </div>
        </div>
    )
}

export default Player