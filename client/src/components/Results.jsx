import React from 'react'
import IndividualResults from './IndividualResults'
const Results = ({ player1, player2, player3, player4, player5, player6, player7 }) => {
    const appleScore = 2,
        chickenScore = 4,
        cheeseScore = 3,
        breadScore = 3,
        pepperScore = 6,
        silkScore = 7,
        meadScore = 8,
        crossbowScore = 9,
        greenApplesScore = 4,
        goldenApplesScore = 6,
        goudaCheeseScore = 6,
        bleuCheeseScore = 9,
        ryeBreadScore = 6,
        pumpernickelScore = 9,
        roosterScore = 8,
        firstTierRoyaltyMultiplier = 2,
        secondTierRoyaltyMultiplier = 3,
        appleKingBonusValue = 20,
        appleQueenBonusValue = 10,
        chickenKingBonusValue = 10,
        chickenQueenBonusValue = 5,
        cheeseKingBonusValue = 15,
        cheeseQueenBonusValue = 10,
        breadKingBonusValue = 15,
        breadQueenBonusValue = 10
    let bonusChecklist = {
        'player1': {
            'hasAppleKingBonus': false,
            'hasAppleQueenBonus': false,
            'hasChickenKingBonus': false,
            'hasChickenQueenBonus': false,
            'hasCheeseKingBonus': false,
            'hasCheeseQueenBonus': false,
            'hasBreadKingBonus': false,
            'hasBreadQueenBonus': false,
        },
        'player2': {
            'hasAppleKingBonus': false,
            'hasAppleQueenBonus': false,
            'hasChickenKingBonus': false,
            'hasChickenQueenBonus': false,
            'hasCheeseKingBonus': false,
            'hasCheeseQueenBonus': false,
            'hasBreadKingBonus': false,
            'hasBreadQueenBonus': false,
        },
        'player3': {
            'hasAppleKingBonus': false,
            'hasAppleQueenBonus': false,
            'hasChickenKingBonus': false,
            'hasChickenQueenBonus': false,
            'hasCheeseKingBonus': false,
            'hasCheeseQueenBonus': false,
            'hasBreadKingBonus': false,
            'hasBreadQueenBonus': false,
        },
        'player4': {
            'hasAppleKingBonus': false,
            'hasAppleQueenBonus': false,
            'hasChickenKingBonus': false,
            'hasChickenQueenBonus': false,
            'hasCheeseKingBonus': false,
            'hasCheeseQueenBonus': false,
            'hasBreadKingBonus': false,
            'hasBreadQueenBonus': false,
        },
        'player5': {
            'hasAppleKingBonus': false,
            'hasAppleQueenBonus': false,
            'hasChickenKingBonus': false,
            'hasChickenQueenBonus': false,
            'hasCheeseKingBonus': false,
            'hasCheeseQueenBonus': false,
            'hasBreadKingBonus': false,
            'hasBreadQueenBonus': false,
        },
        'player6': {
            'hasAppleKingBonus': false,
            'hasAppleQueenBonus': false,
            'hasChickenKingBonus': false,
            'hasChickenQueenBonus': false,
            'hasCheeseKingBonus': false,
            'hasCheeseQueenBonus': false,
            'hasBreadKingBonus': false,
            'hasBreadQueenBonus': false,
        },
        'player7': {
            'hasAppleKingBonus': false,
            'hasAppleQueenBonus': false,
            'hasChickenKingBonus': false,
            'hasChickenQueenBonus': false,
            'hasCheeseKingBonus': false,
            'hasCheeseQueenBonus': false,
            'hasBreadKingBonus': false,
            'hasBreadQueenBonus': false,
        },
    }
    let players = [player1, player2, player3, player4, player5, player6, player7]
    let scoreTally = {}
    let bonusWinners = {
        'appleWinners': {
            'firstPlaceWinners': [],
            'secondPlaceWinners': []
        },
        'chickenWinners': {
            'firstPlaceWinners': [],
            'secondPlaceWinners': []
        },
        'cheeseWinners': {
            'firstPlaceWinners': [],
            'secondPlaceWinners': []
        },
        'breadWinners': {
            'firstPlaceWinners': [],
            'secondPlaceWinners': []
        },
    }

    function tallyApples(onePlayer) {
        return onePlayer.apple + (onePlayer.greenApples * firstTierRoyaltyMultiplier) + (onePlayer.goldenApples * secondTierRoyaltyMultiplier)
    }
    function tallyChicken(onePlayer) {
        return onePlayer.chicken + (onePlayer.rooster * firstTierRoyaltyMultiplier)
    }
    function tallyCheese(onePlayer) {
        return onePlayer.cheese + (onePlayer.goudaCheese * firstTierRoyaltyMultiplier) + (onePlayer.bleuCheese * secondTierRoyaltyMultiplier)
    }
    function tallyBread(onePlayer) {
        return onePlayer.bread + (onePlayer.ryeBread * firstTierRoyaltyMultiplier) + (onePlayer.pumpernickelBread * secondTierRoyaltyMultiplier)
    }

    function tallyBonus(oneGoodsScore) {
        let firstPlaceScore = 1
        let firstPlaceWinners = []
        let secondPlaceScore = 1
        let secondPlaceWinners = []
        for (let i = 0; i < players.length; i++) {
            if (oneGoodsScore(players[i]) > firstPlaceScore) {
                firstPlaceScore = oneGoodsScore(players[i])
                firstPlaceWinners = [players[i].playerNumber]
            } else if (oneGoodsScore(players[i]) === firstPlaceScore) {
                firstPlaceWinners.push(players[i].playerNumber)
            }
        }
        for (let i = 0; i < players.length; i++) {
            if (oneGoodsScore(players[i]) > secondPlaceScore && oneGoodsScore(players[i]) < firstPlaceScore) {
                secondPlaceScore = oneGoodsScore(players[i])
                secondPlaceWinners = [players[i].playerNumber]
            } else if (oneGoodsScore(players[i]) === secondPlaceScore && oneGoodsScore(players[i]) < firstPlaceScore) {
                secondPlaceWinners.push(players[i].playerNumber)
            }
        }
        return {
            'firstPlaceWinners': firstPlaceWinners,
            'secondPlaceWinners': secondPlaceWinners
        }

    }

    function distributeBonus(onePlayer, winners, firstPlaceReward, secondPlaceReward) {
        if (winners.firstPlaceWinners.length > 1) {
            for (let i = 0; i < winners.firstPlaceWinners.length; i++) {
                if (onePlayer.playerNumber === winners.firstPlaceWinners[i]) {
                    return Math.floor((firstPlaceReward + secondPlaceReward) / winners.firstPlaceWinners.length)
                }
            }
        } else if (winners.firstPlaceWinners.length === 1) {
            if (onePlayer.playerNumber === winners.firstPlaceWinners[0]) {
                return firstPlaceReward
            }
            for (let i = 0; i < winners.secondPlaceWinners.length; i++) {
                if (onePlayer.playerNumber === winners.secondPlaceWinners[i]) {
                    return Math.floor(secondPlaceReward / winners.secondPlaceWinners.length)
                }
            }
        }
        return 0
    }

    function hasBonus(playerNumber, winnersArray) {
        for (let i = 0; i < winnersArray.length; i++) {
            if (winnersArray[i] === playerNumber) return true
        }
        return false
    }

    function getTotal(onePlayer) {
        return (onePlayer.apple * appleScore) + (onePlayer.chicken * chickenScore) + (onePlayer.cheese * cheeseScore) + (onePlayer.bread * breadScore) + (onePlayer.pepper * pepperScore) + (onePlayer.silk * silkScore) + (onePlayer.mead * meadScore) + (onePlayer.crossbow * crossbowScore) + (onePlayer.greenApples * greenApplesScore) + (onePlayer.goldenApples * goldenApplesScore) + (onePlayer.goudaCheese * goudaCheeseScore) + (onePlayer.bleuCheese * bleuCheeseScore) + (onePlayer.ryeBread * ryeBreadScore) + (onePlayer.pumpernickelBread * pumpernickelScore) + (onePlayer.rooster * roosterScore) + onePlayer.coins
    }

    bonusWinners.appleWinners = tallyBonus(tallyApples)
    bonusWinners.chickenWinners = tallyBonus(tallyChicken)
    bonusWinners.cheeseWinners = tallyBonus(tallyCheese)
    bonusWinners.breadWinners = tallyBonus(tallyBread)

    scoreTally = {
        'player1': getTotal(player1) +
            distributeBonus(player1, bonusWinners.appleWinners, appleKingBonusValue, appleQueenBonusValue) +
            distributeBonus(player1, bonusWinners.chickenWinners, chickenKingBonusValue, chickenQueenBonusValue) +
            distributeBonus(player1, bonusWinners.cheeseWinners, cheeseKingBonusValue, cheeseQueenBonusValue) +
            distributeBonus(player1, bonusWinners.breadWinners, breadKingBonusValue, breadQueenBonusValue),

        'player2': getTotal(player2) +
            distributeBonus(player2, bonusWinners.appleWinners, appleKingBonusValue, appleQueenBonusValue) +
            distributeBonus(player2, bonusWinners.chickenWinners, chickenKingBonusValue, chickenQueenBonusValue) +
            distributeBonus(player2, bonusWinners.cheeseWinners, cheeseKingBonusValue, cheeseQueenBonusValue) +
            distributeBonus(player2, bonusWinners.breadWinners, breadKingBonusValue, breadQueenBonusValue),

        'player3': getTotal(player3) +
            distributeBonus(player3, bonusWinners.appleWinners, appleKingBonusValue, appleQueenBonusValue) +
            distributeBonus(player3, bonusWinners.chickenWinners, chickenKingBonusValue, chickenQueenBonusValue) +
            distributeBonus(player3, bonusWinners.cheeseWinners, cheeseKingBonusValue, cheeseQueenBonusValue) +
            distributeBonus(player3, bonusWinners.breadWinners, breadKingBonusValue, breadQueenBonusValue),

        'player4': getTotal(player4) +
            distributeBonus(player4, bonusWinners.appleWinners, appleKingBonusValue, appleQueenBonusValue) +
            distributeBonus(player4, bonusWinners.chickenWinners, chickenKingBonusValue, chickenQueenBonusValue) +
            distributeBonus(player4, bonusWinners.cheeseWinners, cheeseKingBonusValue, cheeseQueenBonusValue) +
            distributeBonus(player4, bonusWinners.breadWinners, breadKingBonusValue, breadQueenBonusValue),

        'player5': getTotal(player5) +
            distributeBonus(player5, bonusWinners.appleWinners, appleKingBonusValue, appleQueenBonusValue) +
            distributeBonus(player5, bonusWinners.chickenWinners, chickenKingBonusValue, chickenQueenBonusValue) +
            distributeBonus(player5, bonusWinners.cheeseWinners, cheeseKingBonusValue, cheeseQueenBonusValue) +
            distributeBonus(player5, bonusWinners.breadWinners, breadKingBonusValue, breadQueenBonusValue),

        'player6': getTotal(player6) +
            distributeBonus(player6, bonusWinners.appleWinners, appleKingBonusValue, appleQueenBonusValue) +
            distributeBonus(player6, bonusWinners.chickenWinners, chickenKingBonusValue, chickenQueenBonusValue) +
            distributeBonus(player6, bonusWinners.cheeseWinners, cheeseKingBonusValue, cheeseQueenBonusValue) +
            distributeBonus(player6, bonusWinners.breadWinners, breadKingBonusValue, breadQueenBonusValue),

        'player7': getTotal(player7) +
            distributeBonus(player7, bonusWinners.appleWinners, appleKingBonusValue, appleQueenBonusValue) +
            distributeBonus(player7, bonusWinners.chickenWinners, chickenKingBonusValue, chickenQueenBonusValue) +
            distributeBonus(player7, bonusWinners.cheeseWinners, cheeseKingBonusValue, cheeseQueenBonusValue) +
            distributeBonus(player7, bonusWinners.breadWinners, breadKingBonusValue, breadQueenBonusValue)
    }

    bonusChecklist = {
        'player1': {
            'hasAppleKingBonus': hasBonus(player1.playerNumber, bonusWinners.appleWinners.firstPlaceWinners),
            'hasAppleQueenBonus': hasBonus(player1.playerNumber, bonusWinners.appleWinners.secondPlaceWinners),
            'hasChickenKingBonus': hasBonus(player1.playerNumber, bonusWinners.chickenWinners.firstPlaceWinners),
            'hasChickenQueenBonus': hasBonus(player1.playerNumber, bonusWinners.chickenWinners.secondPlaceWinners),
            'hasCheeseKingBonus': hasBonus(player1.playerNumber, bonusWinners.cheeseWinners.firstPlaceWinners),
            'hasCheeseQueenBonus': hasBonus(player1.playerNumber, bonusWinners.cheeseWinners.secondPlaceWinners),
            'hasBreadKingBonus': hasBonus(player1.playerNumber, bonusWinners.breadWinners.firstPlaceWinners),
            'hasBreadQueenBonus': hasBonus(player1.playerNumber, bonusWinners.breadWinners.secondPlaceWinners),
        },
        'player2': {
            'hasAppleKingBonus': hasBonus(player2.playerNumber, bonusWinners.appleWinners.firstPlaceWinners),
            'hasAppleQueenBonus': hasBonus(player2.playerNumber, bonusWinners.appleWinners.secondPlaceWinners),
            'hasChickenKingBonus': hasBonus(player2.playerNumber, bonusWinners.chickenWinners.firstPlaceWinners),
            'hasChickenQueenBonus': hasBonus(player2.playerNumber, bonusWinners.chickenWinners.secondPlaceWinners),
            'hasCheeseKingBonus': hasBonus(player2.playerNumber, bonusWinners.cheeseWinners.firstPlaceWinners),
            'hasCheeseQueenBonus': hasBonus(player2.playerNumber, bonusWinners.cheeseWinners.secondPlaceWinners),
            'hasBreadKingBonus': hasBonus(player2.playerNumber, bonusWinners.breadWinners.firstPlaceWinners),
            'hasBreadQueenBonus': hasBonus(player2.playerNumber, bonusWinners.breadWinners.secondPlaceWinners),
        },
        'player3': {
            'hasAppleKingBonus': hasBonus(player3.playerNumber, bonusWinners.appleWinners.firstPlaceWinners),
            'hasAppleQueenBonus': hasBonus(player3.playerNumber, bonusWinners.appleWinners.secondPlaceWinners),
            'hasChickenKingBonus': hasBonus(player3.playerNumber, bonusWinners.chickenWinners.firstPlaceWinners),
            'hasChickenQueenBonus': hasBonus(player3.playerNumber, bonusWinners.chickenWinners.secondPlaceWinners),
            'hasCheeseKingBonus': hasBonus(player3.playerNumber, bonusWinners.cheeseWinners.firstPlaceWinners),
            'hasCheeseQueenBonus': hasBonus(player3.playerNumber, bonusWinners.cheeseWinners.secondPlaceWinners),
            'hasBreadKingBonus': hasBonus(player3.playerNumber, bonusWinners.breadWinners.firstPlaceWinners),
            'hasBreadQueenBonus': hasBonus(player3.playerNumber, bonusWinners.breadWinners.secondPlaceWinners),
        },
        'player4': {
            'hasAppleKingBonus': hasBonus(player4.playerNumber, bonusWinners.appleWinners.firstPlaceWinners),
            'hasAppleQueenBonus': hasBonus(player4.playerNumber, bonusWinners.appleWinners.secondPlaceWinners),
            'hasChickenKingBonus': hasBonus(player4.playerNumber, bonusWinners.chickenWinners.firstPlaceWinners),
            'hasChickenQueenBonus': hasBonus(player4.playerNumber, bonusWinners.chickenWinners.secondPlaceWinners),
            'hasCheeseKingBonus': hasBonus(player4.playerNumber, bonusWinners.cheeseWinners.firstPlaceWinners),
            'hasCheeseQueenBonus': hasBonus(player4.playerNumber, bonusWinners.cheeseWinners.secondPlaceWinners),
            'hasBreadKingBonus': hasBonus(player4.playerNumber, bonusWinners.breadWinners.firstPlaceWinners),
            'hasBreadQueenBonus': hasBonus(player4.playerNumber, bonusWinners.breadWinners.secondPlaceWinners),
        },
        'player5': {
            'hasAppleKingBonus': hasBonus(player5.playerNumber, bonusWinners.appleWinners.firstPlaceWinners),
            'hasAppleQueenBonus': hasBonus(player5.playerNumber, bonusWinners.appleWinners.secondPlaceWinners),
            'hasChickenKingBonus': hasBonus(player5.playerNumber, bonusWinners.chickenWinners.firstPlaceWinners),
            'hasChickenQueenBonus': hasBonus(player5.playerNumber, bonusWinners.chickenWinners.secondPlaceWinners),
            'hasCheeseKingBonus': hasBonus(player5.playerNumber, bonusWinners.cheeseWinners.firstPlaceWinners),
            'hasCheeseQueenBonus': hasBonus(player5.playerNumber, bonusWinners.cheeseWinners.secondPlaceWinners),
            'hasBreadKingBonus': hasBonus(player5.playerNumber, bonusWinners.breadWinners.firstPlaceWinners),
            'hasBreadQueenBonus': hasBonus(player5.playerNumber, bonusWinners.breadWinners.secondPlaceWinners),
        },
        'player6': {
            'hasAppleKingBonus': hasBonus(player6.playerNumber, bonusWinners.appleWinners.firstPlaceWinners),
            'hasAppleQueenBonus': hasBonus(player6.playerNumber, bonusWinners.appleWinners.secondPlaceWinners),
            'hasChickenKingBonus': hasBonus(player6.playerNumber, bonusWinners.chickenWinners.firstPlaceWinners),
            'hasChickenQueenBonus': hasBonus(player6.playerNumber, bonusWinners.chickenWinners.secondPlaceWinners),
            'hasCheeseKingBonus': hasBonus(player6.playerNumber, bonusWinners.cheeseWinners.firstPlaceWinners),
            'hasCheeseQueenBonus': hasBonus(player6.playerNumber, bonusWinners.cheeseWinners.secondPlaceWinners),
            'hasBreadKingBonus': hasBonus(player6.playerNumber, bonusWinners.breadWinners.firstPlaceWinners),
            'hasBreadQueenBonus': hasBonus(player6.playerNumber, bonusWinners.breadWinners.secondPlaceWinners),
        },
        'player7': {
            'hasAppleKingBonus': hasBonus(player7.playerNumber, bonusWinners.appleWinners.firstPlaceWinners),
            'hasAppleQueenBonus': hasBonus(player7.playerNumber, bonusWinners.appleWinners.secondPlaceWinners),
            'hasChickenKingBonus': hasBonus(player7.playerNumber, bonusWinners.chickenWinners.firstPlaceWinners),
            'hasChickenQueenBonus': hasBonus(player7.playerNumber, bonusWinners.chickenWinners.secondPlaceWinners),
            'hasCheeseKingBonus': hasBonus(player7.playerNumber, bonusWinners.cheeseWinners.firstPlaceWinners),
            'hasCheeseQueenBonus': hasBonus(player7.playerNumber, bonusWinners.cheeseWinners.secondPlaceWinners),
            'hasBreadKingBonus': hasBonus(player7.playerNumber, bonusWinners.breadWinners.firstPlaceWinners),
            'hasBreadQueenBonus': hasBonus(player7.playerNumber, bonusWinners.breadWinners.secondPlaceWinners),
        },
    }

    return (
        <div className='results-box'>
            <IndividualResults score={scoreTally.player1} checklist={bonusChecklist.player1} color={'Black'}/>
            <IndividualResults score={scoreTally.player2} checklist={bonusChecklist.player2} color={'Green'}/>
            <IndividualResults score={scoreTally.player3} checklist={bonusChecklist.player3} color={'Blue'}/>
            <IndividualResults score={scoreTally.player4} checklist={bonusChecklist.player4} color={'Red'}/>
            <IndividualResults score={scoreTally.player5} checklist={bonusChecklist.player5} color={'Yellow'}/>
            <IndividualResults score={scoreTally.player6} checklist={bonusChecklist.player6} color={'Purple'}/>
            <IndividualResults score={scoreTally.player7} checklist={bonusChecklist.player7} color={'Guest'}/>
        </div>
    )
}

export default Results