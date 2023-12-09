import React from 'react'
import firstPlaceLogo from '../icons/firstPlace.png'
import secondPlaceLogo from '../icons/secondPlace.png'
const IndividualResults = ({ score, checklist, color }) => {
    function displayOneBonus(firstPlace, secondPlace, type) {
        if (firstPlace) {
            return <div className='bonus-icon-box'>
                <img src={firstPlaceLogo} className='bonus-image' alt="firstPlace" />
                <p>{type}</p>
            </div>
        }
        if (secondPlace) {
            return <div className='bonus-icon-box'>
                <img src={secondPlaceLogo} className='bonus-image' alt="secondPlace" />
                <p>{type}</p>
            </div>
        }
        return
    }
    return (
        <>
            {score > 0 ?
                <div className='player-results-box'>
                    <h4>{color}: {score}</h4>
                    <div className='bonus-icon-container'>
                            {displayOneBonus(checklist.hasAppleKingBonus, checklist.hasAppleQueenBonus, 'Apple')}
                            {displayOneBonus(checklist.hasChickenKingBonus, checklist.hasChickenQueenBonus, 'Chicken')}
                            {displayOneBonus(checklist.hasCheeseKingBonus, checklist.hasCheeseQueenBonus, 'Cheese')}
                            {displayOneBonus(checklist.hasBreadKingBonus, checklist.hasBreadQueenBonus, 'Bread')}
                    </div>
                </div> : ''}
        </>
    )
}

export default IndividualResults