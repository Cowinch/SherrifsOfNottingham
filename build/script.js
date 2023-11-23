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


function render() {
    document.getElementById('totalPoints').innerHTML = total
    document.getElementById('chickensPoints').innerHTML = chicken
    document.getElementById('breadPoints').innerHTML = bread
    document.getElementById('applesPoints').innerHTML = apple
}

function getTotal() {
    total = (apple * 2) + (chicken * 4) + (cheese * 3) + (bread * 3) + (pepper * 6) + (silk * 7) + (mead * 8) + (crossbow * 9)
}

function changePoints(item, positive) {
    switch (item) {
        case 'apple':
            if (positive === 1) {
                apple++
            }
            else if (apple>0){
                apple--
            }
            break
        case 'chicken':
            if (positive === 1) {
                chicken++
            }
            else if (chicken>0){
                chicken--
            }
            break
        case 'cheese':
            if (positive === 1) {
                cheese++
            }
            else if (cheese>0){
                cheese--
            }
            break
        case 'bread':
            if (positive === 1) {
                bread++
            }
            else if (bread>0){
                bread--
            }
            break
        case 'pepper':
            if (positive === 1) {
                pepper++
            }
            else if (pepper>0){
                pepper--
            }
            break
        case 'silk':
            if (positive === 1) {
                silk++
            }
            else if (silk>0){
                silk--
            }
            break
        case 'mead':
            if (positive === 1) {
                mead++
            }
            else if (mead>0){
                mead--
            }
            break
        case 'crossbow':
            if (positive === 1) {
                crossbow++
            }
            else if (crossbow>0){
                crossbow--
            }
            break
        default:
            return

    }
    getTotal()
    render()
}

render()
