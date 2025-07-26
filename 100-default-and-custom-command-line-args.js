// storing command line arguments list into a variable.
let allcommandLineArgsList = process.argv;

let countOfCommandLineArgs = allcommandLineArgsList.length;

console.log(`Total number of command line arguments : ${countOfCommandLineArgs}`)

// storing the first two elements of the command line list into another list
let commandLineArgsListFirstTwoElements = allcommandLineArgsList.slice(0, 2);

// iterating over the list containing first two elements of command line arguments list and printing them
commandLineArgsListFirstTwoElements.forEach( (item, index) => {
    console.log(`JS.. Provided Command Line Argument ${index} : ${item}`);
});

// validating if there are custom or user defined arguments provided while running the code by checking if the length of the  list containing all command line arguments is greater than 2. 
if(allcommandLineArgsList.length > 2)
{
    // storing elements from the third element onwards, from the list containing all command line arguments.
    let commandLineArgsListThirdElementOnwards = allcommandLineArgsList.slice(2);

    // iterating over the list containing all command line arguments from the third element and printing them.
    commandLineArgsListThirdElementOnwards.forEach( (item, index) => {
        let commandLineCustomArgsCurrentIndex = index + 2;
        console.log(`User Provided Command Line Argument ${commandLineCustomArgsCurrentIndex} : ${item}`);
    });
}
else
{
    console.log("There are no custom or user defined arguments provided while running the code.");
}





