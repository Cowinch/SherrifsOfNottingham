import React from 'react'
import { useState, useEffect } from 'react'

const Results = ({ player1, player2, player3, player4, player5, player6, player7 }) => {
    let players = [player1, player2, player3, player4, player5, player6, player7]
    let scoreTally = {}
    scoreTally = {
        'player1': getTotal(player1) + chickenBonus(player1) + cheeseBonus(player1) + appleBonus(player1) + breadBonus(player1),
        'player2': getTotal(player2) + chickenBonus(player2) + cheeseBonus(player2) + appleBonus(player2) + breadBonus(player2),
        'player3': getTotal(player3) + chickenBonus(player3) + cheeseBonus(player3) + appleBonus(player3) + breadBonus(player3),
        'player4': getTotal(player4) + chickenBonus(player4) + cheeseBonus(player4) + appleBonus(player4) + breadBonus(player4),
        'player5': getTotal(player5) + chickenBonus(player5) + cheeseBonus(player5) + appleBonus(player5) + breadBonus(player5),
        'player6': getTotal(player6) + chickenBonus(player6) + cheeseBonus(player6) + appleBonus(player6) + breadBonus(player6),
        'player7': getTotal(player7) + chickenBonus(player7) + cheeseBonus(player7) + appleBonus(player7) + breadBonus(player7)
    }
    // function tallyChicken(onePlayer) {
    //     return onePlayer.chicken + (onePlayer.Rooster * 2)
    // }
    // function tallyApples(onePlayer) {
    //     return onePlayer.apple + (onePlayer.greenApples * 2) + (onePlayer.goldenApples * 3)
    // }
    // function tallyBread(onePlayer) {
    //     return onePlayer.bread + (onePlayer.ryeBread * 2) + (onePlayer.pumpernickelBread * 3)
    // }
    // function tallyCheese(onePlayer) {
    //     return onePlayer.cheese + (onePlayer.goudaCheese * 2) + (onePlayer.bleuCheese * 3)
    // }

    function chickenBonus(onePlayer) {
        if(getTotal(onePlayer)<=0){
            return 0
        }
        let firstPlaceScore = 1
        let firstPlace = []
        let secondPlaceScore = 1
        let secondPlace = []
        for (let i = 0; i < 7; i++) {
            if ((players[i].chicken + (players[i].rooster * 2)) > firstPlaceScore) {
                firstPlaceScore = players[i].chicken + (players[i].rooster * 2)
                firstPlace = [players[i].playerNumber]
            } else if ((players[i].chicken + (players[i].rooster * 2)) === firstPlaceScore) {
                firstPlace.push(players[i].playerNumber)
            }
        }
        for (let i = 0; i < 7; i++) {
            if ((players[i].chicken + (players[i].rooster * 2)) > secondPlaceScore && (players[i].chicken + (players[i].rooster * 2)) < firstPlaceScore) {
                secondPlaceScore = players[i].chicken + (players[i].rooster * 2)
                secondPlace = [players[i].playerNumber]
            } else if ((players[i].chicken + (players[i].rooster * 2)) === secondPlaceScore) {
                secondPlace.push(players[i].playerNumber)
            }
        }
        if (firstPlace.length > 1) {
            for (let i = 0; i < firstPlace.length; i++) {
                if (onePlayer.playerNumber == firstPlace[i]) {
                    return Math.floor(15 / firstPlace.length)
                }
            }
        } else if (firstPlace.length == 1) {
            if (onePlayer.playerNumber == firstPlace[0])
                return 10
            for (let i = 0; i < secondPlace.length; i++) {
                if (onePlayer.playerNumber == secondPlace[i]) {
                    return Math.floor(5 / secondPlace.length)
                }
            }
        }
        return 0
    }

    function breadBonus(onePlayer) {
        if(getTotal(onePlayer)<=0){
            return 0
        }
        let firstPlaceScore = 1
        let firstPlace = []
        let secondPlaceScore = 1
        let secondPlace = []
        for (let i = 0; i < 7; i++) {
            if ((players[i].bread + (players[i].ryeBread * 2) + (players[i].pumpernickelBread * 3)) > firstPlaceScore) {
                console.log('triggered')
                firstPlaceScore = players[i].bread + (players[i].ryeBread * 2) + (players[i].pumpernickelBread * 3)
                firstPlace = [players[i].playerNumber]
            } else if ((players[i].bread + (players[i].ryeBread * 2) + (players[i].pumpernickelBread * 3)) === firstPlaceScore) {
                firstPlace.push(players[i].playerNumber)
            }
        }
        for (let i = 0; i < 7; i++) {
            if ((players[i].bread + (players[i].ryeBread * 2) + (players[i].pumpernickelBread * 3)) > secondPlaceScore && (players[i].bread + (players[i].ryeBread * 2) + (players[i].pumpernickelBread * 3)) < firstPlaceScore) {
                secondPlaceScore = players[i].bread + (players[i].ryeBread * 2) + (players[i].pumpernickelBread * 3)
                secondPlace = [players[i].playerNumber]
            } else if ((players[i].bread + (players[i].ryeBread * 2) + (players[i].pumpernickelBread * 3)) === secondPlaceScore) {
                secondPlace.push(players[i].playerNumber)
            }
        }
        if (firstPlace.length > 1) {
            for (let i = 0; i < firstPlace.length; i++) {
                if (onePlayer.playerNumber == firstPlace[i]) {
                    return Math.floor(25 / firstPlace.length)
                }
            }
        } else if (firstPlace.length == 1) {
            if (onePlayer.playerNumber == firstPlace[0])
                return 15
            for (let i = 0; i < secondPlace.length; i++) {
                if (onePlayer.playerNumber == secondPlace[i]) {
                    return Math.floor(10 / secondPlace.length)
                }
            }
        }
        return 0
    }

    function appleBonus(onePlayer) {
        if(getTotal(onePlayer)<=0){
            return 0
        }
        let firstPlaceScore = 1
        let firstPlace = []
        let secondPlaceScore = 1
        let secondPlace = []
        for (let i = 0; i < 7; i++) {
            if ((players[i].apple + (players[i].greenApples * 2) + (players[i].goldenApples * 3)) > firstPlaceScore) {
                firstPlaceScore = players[i].apple + (players[i].greenApples * 2) + (players[i].goldenApples * 3)
                firstPlace = [players[i].playerNumber]
            } else if ((players[i].apple + (players[i].greenApples * 2) + (players[i].goldenApples * 3)) === firstPlaceScore) {
                firstPlace.push(players[i].playerNumber)
            }
        }
        for (let i = 0; i < 7; i++) {
            if ((players[i].apple + (players[i].greenApples * 2) + (players[i].goldenApples * 3)) > secondPlaceScore && (players[i].apple + (players[i].greenApples * 2) + (players[i].goldenApples * 3)) < firstPlaceScore) {
                secondPlaceScore = players[i].apple + (players[i].greenApples * 2) + (players[i].goldenApples * 3)
                secondPlace = [players[i].playerNumber]
            } else if ((players[i].apple + (players[i].greenApples * 2) + (players[i].goldenApples * 3)) === secondPlaceScore) {
                secondPlace.push(players[i].playerNumber)
            }
        }
        if (firstPlace.length > 1) {
            for (let i = 0; i < firstPlace.length; i++) {
                if (onePlayer.playerNumber == firstPlace[i]) {
                    return Math.floor(30 / firstPlace.length)
                }
            }
        } else if (firstPlace.length == 1) {
            if (onePlayer.playerNumber == firstPlace[0])
                return 20
            for (let i = 0; i < secondPlace.length; i++) {
                if (onePlayer.playerNumber == secondPlace[i]) {
                    return Math.floor(10 / secondPlace.length)
                }
            }
        }
        return 0
    }

    function cheeseBonus(onePlayer) {
        if(getTotal(onePlayer)<=0){
            return 0
        }
        let firstPlaceScore = 1
        let firstPlace = []
        let secondPlaceScore = 1
        let secondPlace = []
        for (let i = 0; i < 7; i++) {
            if ((players[i].cheese + (players[i].goudaCheese * 2) + (players[i].bleuCheese * 3)) > firstPlaceScore) {
                firstPlaceScore = players[i].cheese + (players[i].goudaCheese * 2) + (players[i].bleuCheese * 3)
                firstPlace = [players[i].playerNumber]
            } else if ((players[i].cheese + (players[i].goudaCheese * 2) + (players[i].bleuCheese * 3)) === firstPlaceScore) {
                firstPlace.push(players[i].playerNumber)
            }
        }
        for (let i = 0; i < 7; i++) {
            if ((players[i].cheese + (players[i].goudaCheese * 2) + (players[i].bleuCheese * 3)) > secondPlaceScore && (players[i].cheese + (players[i].goudaCheese * 2) + (players[i].bleuCheese * 3)) < firstPlaceScore) {
                secondPlaceScore = players[i].cheese + (players[i].goudaCheese * 2) + (players[i].bleuCheese * 3)
                secondPlace = [players[i].playerNumber]
            } else if ((players[i].cheese + (players[i].goudaCheese * 2) + (players[i].bleuCheese * 3)) === secondPlaceScore) {
                secondPlace.push(players[i].playerNumber)
            }
        }
        if (firstPlace.length > 1) {
            for (let i = 0; i < firstPlace.length; i++) {
                if (onePlayer.playerNumber == firstPlace[i]) {
                    return Math.floor(25 / firstPlace.length)
                }
            }
        } else if (firstPlace.length == 1) {
            if (onePlayer.playerNumber == firstPlace[0])
                return 15
            for (let i = 0; i < secondPlace.length; i++) {
                if (onePlayer.playerNumber == secondPlace[i]) {
                    return Math.floor(10 / secondPlace.length)
                }
            }
        }
        return 0
    }

    function getTotal(onePlayer) {
        return (onePlayer.apple * 2) + (onePlayer.chicken * 4) + (onePlayer.cheese * 3) + (onePlayer.bread * 3) + (onePlayer.pepper * 6) + (onePlayer.silk * 7) + (onePlayer.mead * 8) + (onePlayer.crossbow * 9) + (onePlayer.greenApples * 4) + (onePlayer.goldenApples * 6) + (onePlayer.goudaCheese * 6) + (onePlayer.bleuCheese * 9) + (onePlayer.ryeBread * 6) + (onePlayer.pumpernickelBread * 9) + (onePlayer.rooster * 8) + onePlayer.coins
    }

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