// Declare and assign the variables below
let ShuttleName = "Determination";
let ShuttleSpeed = 17500;
let Marsdist = 225000000;
let Moondist = 384400;
const Mpk = 0.621;

// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof ShuttleName);
console.log(typeof ShuttleSpeed);
console.log(typeof Marsdist);
console.log(typeof Moondist);
console.log(typeof Mpk);

// Calculate a space mission below
let milestoMars = Marsdist * Mpk;
let hourstoMars = Marsdist/ShuttleSpeed;
let daystoMars = hourstoMars/24;

// Print the results of the space mission calculations below
console.log(milestoMars);
console.log(hourstoMars);
console.log(daystoMars);
console.log(ShuttleName + " will take " + daystoMars + " days to reach Mars.");

// Calculate a trip to the moon below
let milestoMoon = Moondist * Mpk;
let hourstoMoon = Moondist/ShuttleSpeed;
let daystoMoon = hourstoMoon/24;

// Print the results of the trip to the moon below
console.log(milestoMoon);
console.log(hourstoMoon);
console.log(daystoMoon);
console.log(ShuttleName + " will take " + daystoMoon + " days to reach Mars.");