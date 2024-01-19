
// let food = "water bottles,meal packs,snacks,chocolate";
// let equipment = "space suits,jet packs,tool belts,thermal detonators";
// let pets = "parrots,cats,moose,alien eggs";
// let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

// //1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
// let foodArray = food.split(",").sort();
// let equipmentArray = equipment.split(",").sort();
// let petsArray = pets.split(",").sort();
// let sleepAidsArray = sleepAids.split(",").sort(); 
// //2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
// let xzibit = [foodArray, equipmentArray, petsArray, sleepAidsArray];
// console.log(xzibit);

// //3) Query the user to select a cabinet (0 - 3) in the cargoHold.
// let selectedCabinet = Number(input.question("Please select a cabinet number from 0-3: "));
// let specificItem = input.question("Please enter the name of an item you think is in this cabinet: ");
// //4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.

// //5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”


const readlineSync = require('readline-sync');

let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

// 1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
let foodArray = food.split(",").sort();
let equipmentArray = equipment.split(",").sort();
let petsArray = pets.split(",").sort();
let sleepAidsArray = sleepAids.split(",").sort();

// 2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold = [foodArray, equipmentArray, petsArray, sleepAidsArray];
console.log(cargoHold);

// 3) Query the user to select a cabinet (0 - 3) in the cargoHold.
let selectedCabinet = Number(readlineSync.question("Please select a cabinet number from 0-3: "));

// 4) Use bracket notation and a template literal to display the contents of the selected cabinet.
if (selectedCabinet >= 0 && selectedCabinet < cargoHold.length) {
  console.log(`Contents of Cabinet ${selectedCabinet}: ${cargoHold[selectedCabinet].join(', ')}`);
} else {
  console.log("Error: Invalid cabinet number.");
}

// 5) Query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method.
let selectedCabinetWithItem = Number(readlineSync.question("Please select a cabinet number from 0-3: "));
let specificItem = readlineSync.question("Please enter the name of an item you think is in this cabinet: ");

if (
  selectedCabinetWithItem >= 0 &&
  selectedCabinetWithItem < cargoHold.length &&
  cargoHold[selectedCabinetWithItem].includes(specificItem)
) {
  console.log(`Cabinet ${selectedCabinetWithItem} DOES contain ${specificItem}.`);
} else {
  console.log(`Cabinet ${selectedCabinetWithItem} DOES NOT contain ${specificItem}.`);
}
