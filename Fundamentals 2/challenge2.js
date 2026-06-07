function calcTip(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
}

const bills = [125, 555, 44]
const tips = []
const totals = []

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i])
    tips.push(tip)
    totals.push(tip + bills[i])
}

console.log(`Tips: ${tips} \nTotals: ${totals}`)
