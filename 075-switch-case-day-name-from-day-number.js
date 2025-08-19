const prompt = require('prompt-sync')();

console.log("Please enter day number (1-7): ");
const myDayNo = Number(prompt());

let dayName;

switch(myDayNo) {
    case 1: {
        dayName = "MONDAY";
        break;
    }
    case 2: {
        dayName = "TUESDAY";
        break;
    }
    case 3: {
        dayName = "WEDNESDAY";
        break;
    }
    case 4: {
        dayName = "THURSDAY";
        break;
    }
    case 5: {
        dayName = "FRIDAY";
        break;
    }
    case 6: {
        dayName = "SATURDAY";
        break;
    }
    case 7: {
        dayName = "SUNDAY";
        break;
    }
    default: {
        dayName = "UNDEFINED";
    }
}

console.log(`Day ${myDayNo} represents = ${dayName}`);