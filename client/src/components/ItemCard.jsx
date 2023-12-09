import React from 'react'

const ItemCard = ({item, setItem}) => {
  return (
    <div className="point-box">
                <p>Apple: {item}</p>
                <div className='clicker-box'>
                    <div className="clicker" onClick={() => setItem(player => ({...player, apple:player.apple+1}))}>+</div>
                    <div className="clicker" onClick={() => setItem(player => ({...player, apple:player.apple-1}))}>-</div>
                </div>
            </div>
  )
}

export default ItemCard