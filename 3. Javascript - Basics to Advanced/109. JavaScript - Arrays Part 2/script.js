console.clear();

var mFriends = ["Shaw", "Clara", "Vab", "Kun", "Jacob", "Dina"];
mFriends.splice(3, 0, "Donna", "Rachel");

// 1st tells where to start
// 2nd tells how many items to be deleted
// 3rd and 4th and so on tells what items to  be added
console.log(mFriends);

mFriends.splice(0, 0, "Harvey");
console.log(mFriends);

// Delete item at specific position
mFriends.splice(2, 1);
console.log(mFriends);

str = mFriends.splice(0, 2);
console.log(str);
console.log(mFriends);
console.log(mFriends);

// Concatenation
var mOfficeFriends = ["Nina", "Aron", "Katie", "Vic", "Paula"];
var mAllFriends = mFriends.concat(mOfficeFriends);

console.log("====================================");
console.log(mFriends);
console.log(mOfficeFriends);
console.log(mAllFriends);

//Sorting Ascending and Descending

mAllFriends.sort();
console.log(mAllFriends);

mAllFriends.reverse();
console.log(mAllFriends);

// Q1. Write a JavaScript program to create a new array by reversing the elements of given array.

let arr = [1, "a", 2, "b", 3, "c", 6, "d", 7, "e", 8, "f"];

arr.reverse();
console.log(arr);

arr.sort();
console.log(arr);

// Q2. Write a JavaScript program to check if there is at least one element which occurs in two given sorted arrays of integers.

let arr1 = [4, 11, 12, 23, 46, 65, 70, 73, 98],
  arr2 = [7, 13, 25, 46, 58, 70, 84];

let flag = false;

for (let item1 of arr1) {
  for (let item2 of arr2) {
    if (item1 === item2) {
      flag = true;
      break;
    }
  }
  if (flag) {
    break;
  }
}

if (flag) {
  console.log("Element found: Yes");
} else {
  console.log("Element found: No");
}

// Q3. Write a JavaScript program to check whether a given array of integers represents either a strictly increasing or a strictly decreasing sequence.

let arr3 = {
  arr4_temp1: [1, 2, 2],
  arr4_temp2: [1, 2, 3],
  arr4_temp3: [4, 5, 6, 7, 8],
  arr4_temp4: [3, 4, 6, 6, 7, 8, 9],
  arr4_temp5: [34, 23, 45, 55, 67, 77],
};

for (let item in arr3) {
  console.log(arr3[item]);
  let answer = checkStrictlyIncreasing(arr3[item]);
  if (answer) {
    console.log("The array is strictly increasing.");
  } else {
    console.log("The array is NOT strictly increasing.");
  }
}

function checkStrictlyIncreasing(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] >= arr[i + 1]) {
      return false;
    }
  }
  return true;
}

// Q4. Write a JavaScript function to convert an amount to coins.

let amount = 59;
let coins = [25, 10, 5, 2, 1];
let amtSum = amount;
let finalArr4 = [];

for (let i = 0; amtSum > 0 && i < coins.length; ) {
  if (amtSum >= coins[i]) {
    finalArr4.push(coins[i]);
    amtSum -= coins[i];
  } else {
    i++;
  }
}

console.log(finalArr4);

// Q5. Write a JavaScript function to create a new array from given array by formatting the numbers to human readable form with correct suffix like 1 to 1st, 2 to 2nd, 3 to 3rd and 4 to 4th.

let arr5 = [22, 8, 301, 404, 35, 99];
console.log(arr5);
let arr5Final = numbersReadable(arr5);
console.log(arr5Final);

function numbersReadable(arr) {
  let arrTemp = [];
  for (let item of arr) {
    let str = "";
    switch (item % 100) {
      case 11:
      case 12:
      case 13:
        str = item + "th";
        break;
      default:
        switch (item % 10) {
          case 1:
            str = item + "st";
            break;
          case 2:
            str = item + "nd";
            break;
          case 3:
            str = item + "rd";
            break;
          default:
            str = item + "th";
        }
    }
    arrTemp.push(str);
  }

  return arrTemp;
}
