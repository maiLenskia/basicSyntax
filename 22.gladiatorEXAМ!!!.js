function gladiator(lostFight, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let helmetCost = Math.floor(lostFight / 2) * helmetPrice;
    let swordCost = Math.floor(lostFight / 3) * swordPrice;
    let shildCost = Math.floor(lostFight / 6) * shieldPrice;
    let armorCost = Math.floor(lostFight / 12) * armorPrice; 

    let totalExpenses = helmetCost + swordCost + shildCost + armorCost;

    console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`)
}
gladiator(7, 2, 3, 4, 5)