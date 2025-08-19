const prompt = require('prompt-sync')();

console.log("Please enter the number of units consumed: ");
const myUnitsConsumed = Number(prompt());

const ratePerUnit1st100Units = 3.0;
const ratePerUnit2nd100Units = 4.5;
const ratePerUnit3rd100Units = 6.0;
const ratePerUnit4th100Units = 7.5;
let totalCostOfElectricityConsumption;

switch(true) {
    case (myUnitsConsumed<=100): {
        totalCostOfElectricityConsumption = myUnitsConsumed * ratePerUnit1st100Units;
        break;
    }
    case (myUnitsConsumed<=200): {
        totalCostOfElectricityConsumption = (100 * ratePerUnit1st100Units) + 
                                            ((myUnitsConsumed - 100) * ratePerUnit2nd100Units);
        break;
    }
    case (myUnitsConsumed<=300): {
        totalCostOfElectricityConsumption = (100 * ratePerUnit1st100Units) + 
                                            (100 * ratePerUnit2nd100Units) + 
                                            ((myUnitsConsumed - 200) * ratePerUnit3rd100Units);
        break;
    }
    default: {
        totalCostOfElectricityConsumption = (100 * ratePerUnit1st100Units) + 
                                            (100 * ratePerUnit2nd100Units) + 
                                            (100 * ratePerUnit3rd100Units) + 
                                            ((myUnitsConsumed - 300) * ratePerUnit4th100Units);
    }
}

console.log(`Total Bill: ${totalCostOfElectricityConsumption}`);
