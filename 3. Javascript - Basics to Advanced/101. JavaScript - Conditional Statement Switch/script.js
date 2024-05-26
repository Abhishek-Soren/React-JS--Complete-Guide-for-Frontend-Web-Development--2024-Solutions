console.clear();

var currentDay = "Thu";

switch (currentDay) {
  case "Mon":
    console.log("Timings: 10:00-06:00");
    break;
  case "Tue":
    console.log("Timings: 09:00-05:00");
    break;
  case "Wed":
    console.log("Timings: 09:30-05:30");
    break;
  case "Thu":
    console.log("Timings: 10:15-06:15");
    break;
  case "Fri":
    console.log("Timings: 09:05-05:05");
    break;
  case "Sat":
    console.log("Timings: 09:00-05:00");
    break;
  case "Sun":
    console.log("Timings: 09:00-01:00");
    break;
  default:
    console.log("Timings: 09:00-01:00");
}

// Write a program to print the number of days in a month using a switch case. Change the value of monthNumber and check if your code works fine.

var monthNumber = 12;

switch (monthNumber) {
  case 1:
    console.log("Month = January");
    console.log("Total number of days = 31");
    break;
  case 2:
    console.log("Month = February");
    console.log("Total number of days = 28");
    break;
  case 3:
    console.log("Month = March");
    console.log("Total number of days = 31");
    break;
  case 4:
    console.log("Month = April");
    console.log("Total number of days = 30");
    break;
  case 5:
    console.log("Month = May");
    console.log("Total number of days = 31");
    break;
  case 6:
    console.log("Month = Jun");
    console.log("Total number of days = 30");
    break;
  case 7:
    console.log("Month = July");
    console.log("Total number of days = 31");
    break;
  case 8:
    console.log("Month = August");
    console.log("Total number of days = 31");
    break;
  case 9:
    console.log("Month = September");
    console.log("Total number of days = 30");
    break;
  case 10:
    console.log("Month = October");
    console.log("Total number of days = 31");
    break;
  case 11:
    console.log("Month = November");
    console.log("Total number of days = 30");
    break;
  case 12:
    console.log("Month = December");
    console.log("Total number of days = 31");
    break;
}

// Write a program to check vowel or consonant using switch case. Change the value of enteredAlphabet and check if your code works fine.

var enteredAlphabet = "b";

switch (enteredAlphabet) {
  case "a":
  case "e":
  case "i":
  case "o":
  case "u":
    console.log(enteredAlphabet + " is a vowel.");
    break;
  default:
    console.log(enteredAlphabet + " is a consonant.");
}

//Write a program to check even or odd number using switch case. Change the value of enteredNumber and check if your code works fine.

var enteredNumber = 41;

switch (enteredNumber % 2) {
  case 0:
    console.log(enteredNumber + " is an even number.");
    break;
  case 1:
    console.log(enteredNumber + " is an odd number.");
}
