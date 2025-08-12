const prompt = require('prompt-sync')();

console.log("Please enter the number of units consumed: ");
const myUnitsConsumed = Number(prompt())

const costPerUnitOfFirst100Units = 1.50;
const costPerUnitOfSecond100Units = 2.00;
const costPerUnitOfThird100Units = 3.00;
const costPerUnitFor300OnwardsUnits = 5.00;

let costOfConsumptionForFirst100Units = 0.0;
let costOfConsumptionForSecond100Units = 0.0;
let costOfConsumptionForThird100Units = 0.0;
let costOfConsumptionFor300OnwardsUnits = 0.0;

if(myUnitsConsumed<=100) {
    costOfConsumptionForFirst100Units = myUnitsConsumed * costPerUnitOfFirst100Units;
}
else if(myUnitsConsumed<=200) {
    costOfConsumptionForFirst100Units = 100 * 1.50;
    costOfConsumptionForSecond100Units = (myUnitsConsumed - 100) * costPerUnitOfSecond100Units;
}
else if(myUnitsConsumed<=300) {
    costOfConsumptionForFirst100Units = 100 * costPerUnitOfFirst100Units;
    costOfConsumptionForSecond100Units = 100 * costPerUnitOfSecond100Units;
    costOfConsumptionForThird100Units = (myUnitsConsumed - 200) * costPerUnitOfThird100Units;
}
else {
    costOfConsumptionForFirst100Units = 100 * costPerUnitOfFirst100Units;
    costOfConsumptionForSecond100Units = 100 * costPerUnitOfSecond100Units;
    costOfConsumptionForThird100Units = 100 * costPerUnitOfThird100Units;
    costOfConsumptionFor300OnwardsUnits = (myUnitsConsumed - 300) * costPerUnitFor300OnwardsUnits;
}

const totalCostOfElectricityConsumption = costOfConsumptionForFirst100Units + costOfConsumptionForSecond100Units + costOfConsumptionForThird100Units + costOfConsumptionFor300OnwardsUnits;

console.log(`Total Bill: ${totalCostOfElectricityConsumption}`);