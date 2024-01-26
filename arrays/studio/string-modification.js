const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
// console.log(str.length);
console.log(str.slice (0,3));
console.log(str.slice(7,10));

let strReplace = str.slice(0,3);
let strEnd = str.slice(3);
let strRve = strEnd.concat(strReplace);
console.log(strRve);
//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`The reverse of the word '${str}' is '${strRve}'`);
//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
str = "LaunchCode";

let userInput = input.question("Pick a number ");
// let strInput = str.slice(0, userInput);
// let userAnswer = str.slice(userInput);
// console.log(userAnswer + strInput);

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if (userInput >= 0 && userInput <= 9) {
    let firstStr = str.slice(0, userInput);
    let secondStr = str.slice(userInput);
    console.log(secondStr + firstStr);
  } else {
    userInput = 3; // Default to moving 3 characters
    let firstStr = str.slice(0, userInput);
    let secondStr = str.slice(userInput);
    console.log(`Invalid input. Defaulting to moving 3 characters: ${(secondStr + firstStr)}`);
  }