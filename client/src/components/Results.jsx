import React from 'react'
import { useState, useEffect } from 'react'

const Results = ({ player1, player2, player3, player4, player5, player6, player7 }) => {
    let scoreTally = {
        'player1': getTotal(player1),
        'player2': getTotal(player2),
        'player3': getTotal(player3),
        'player4': getTotal(player4),
        'player5': getTotal(player5),
        'player6': getTotal(player6),
        'player7': getTotal(player7)
    }
    let players = [player1, player2, player3, player4, player5, player6, player7]
    function tallyChicken(onePlayer) {
        return onePlayer.chicken + (onePlayer.Rooster * 2)
    }
    function tallyApples(onePlayer) {
        return onePlayer.apple + (onePlayer.greenApples * 2) + (onePlayer.goldenApples * 3)
    }
    function tallyBread(onePlayer) {
        return onePlayer.bread + (onePlayer.ryeBread * 2) + (onePlayer.pumpernickelBread * 3)
    }
    function tallyCheese(onePlayer) {
        return onePlayer.cheese + (onePlayer.goudaCheese * 2) + (onePlayer.bleuCheese * 3)
    }
    function kingAndQueenBonus() {
        let firstPlaceScore=0
        let firstPlace = []
        let secondPlaceScore=0
        let secondPlace = []
        for (let i = 0; i < 7; i++) {
            if ((players[i].chicken + players[i].rooster) > firstPlaceScore) {
                firstPlaceScore = players[i].chicken + players[i].rooster
                firstPlace = [players[i].playerNumber]
            } else if ((players[i].chicken + players[i].rooster) === firstPlaceScore) {
                firstPlace.push(players[i].playerNumber)
            } else if ((players[i].chicken + players[i].rooster) > secondPlaceScore) {
                secondPlaceScore = players[i].chicken + players[i].rooster
                secondPlace = [players[i].playerNumber]
            } else if ((players[i].chicken + players[i].rooster) === secondPlaceScore) {
                secondPlace.push(players[i].playerNumber)
            }
        }
        console.log(firstPlace)
        if (firstPlace.length > 1) {
            for(let i = 0; i< firstPlace.length; i++){
                for (let item of Object.keys(scoreTally)) {
                    if('no' == firstPlace[i]){
                        scoreTally[item]+= Math.floor(15 / firstPlace.length)
                    }
                }
            }
        } else {
            for (let item of Object.keys(scoreTally)) {
                if('no' == firstPlace[0]){
                    scoreTally[item]+= 10
                }
            }
            for(let i = 0; i< secondPlace.length; i++){
                for (let item of Object.keys(scoreTally)) {
                    if('no' == secondPlace[i]){
                        scoreTally[item]+= Math.floor( 5 / secondPlace.length)
                    }
                }
            }
        }
    }

    function getTotal(onePlayer) {
        return (onePlayer.apple * 2) + (onePlayer.chicken * 4) + (onePlayer.cheese * 3) + (onePlayer.bread * 3) + (onePlayer.pepper * 6) + (onePlayer.silk * 7) + (onePlayer.mead * 8) + (onePlayer.crossbow * 9) + (onePlayer.greenApples * 4) + (onePlayer.goldenApples * 6) + (onePlayer.goudaCheese * 6) + (onePlayer.bleuCheese * 9) + (onePlayer.ryeBread * 6) + (onePlayer.pumpernickelBread * 9) + (onePlayer.rooster * 8)
    }

    useEffect(() => {
      kingAndQueenBonus()
      console.log('triggered')
    
    }, [])
    
    return (
        <div>
            <div>
                {scoreTally.player1 > 0 ? <h1>Black: {scoreTally.player1}</h1> : ''}
            </div>

            <div>
                {scoreTally.player2 > 0 ? <h1>Green: {scoreTally.player2}</h1> : ''}
            </div>

            <div>
                {scoreTally.player3 > 0 ? <h1>Blue: {scoreTally.player3}</h1> : ''}
            </div>

            <div>
                {scoreTally.player4 > 0 ? <h1>Red: {scoreTally.player4}</h1> : ''}
            </div>

            <div>
                {scoreTally.player5 > 0 ? <h1>Yellow: {scoreTally.player5}</h1> : ''}
            </div>

            <div>
                {scoreTally.player6 > 0 ? <h1>Purple: {scoreTally.player6}</h1> : ''}
            </div>

            <div>
                {scoreTally.player7 > 0 ? <h1>Guest: {scoreTally.player7}</h1> : ''}
            </div>
        </div>
    )
}

export default Results