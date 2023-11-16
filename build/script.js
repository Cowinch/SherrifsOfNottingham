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


function render(){
    document.getElementById('totalPoints').innerHTML = total
    document.getElementById('chickensPoints').innerHTML = chicken
    document.getElementById('breadPoints').innerHTML = bread
    document.getElementById('applesPoints').innerHTML = apple
}

function getTotal(){
    total = (apple * 2) + (chicken * 4) + (cheese * 3) + (bread * 3) + (pepper * 6) + (silk * 7) + (mead * 8) + (crossbow * 9)
}

function changePoints(item, positive){
    switch(item){
        case 'apple':
            positive===1 ? apple++ : apple--
            break
        case 'chicken':
            positive===1 ? chicken++ : chicken--
            break
        case 'cheese':
            positive===1 ? cheese++ : cheese--
            break
        case 'bread':
            positive===1 ? bread++ : bread--
            break
        case 'pepper':
            positive===1 ? pepper++ : pepper--
            break
        case 'silk':
            positive===1 ? silk++ : silk--
            break
        case 'mead':
            positive===1 ? mead++ : mead--
            break
        case 'crossbow':
            positive===1 ? crossbow++ : crossbow--
            break
        default:
            return

    }
    getTotal()
    render()
}

render()
    