const bill = document.getElementById('billTotalInput')
const tip = document.getElementById('tipInput')
const pep = document.getElementById('numberOfPeople')
const tot = document.getElementById('perPersonTotal')

const calculateBill = () => {
    let bilval = Number(bill.value)
    let pepval = Number(pep.innerText)
    let tipval = Number(tip.value)
    tipval = tipval / 100
    tipper = tipval * bilval
    totalval = (tipper + bilval) / pepval
    console.log(` billval : ${bilval}`)
    console.log(` tipval : ${tipval}`)
    console.log(` tipper : ${tipper}`)
    console.log(`totalval : ${totalval}`)
    tot.innerText = `$${totalval.toFixed(2)}`
}

const increasePeople = () => {
    let pepval = Number(pep.innerText)
    pepval += 1
    pep.innerText = pepval
    calculateBill()
}

const decreasePeople = () => {
    let pepval = Number(pep.innerText)
    if (pepval > 1) {
        pepval -= 1
    }
    pep.innerText = pepval
    calculateBill()
}