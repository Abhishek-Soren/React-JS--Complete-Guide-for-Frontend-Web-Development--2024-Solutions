console.clear();

var mFriends = ["Shaw", "Clara", "Vab", "Kun", "Jacob", "Dina"];
console.log(mFriends);
console.log(typeof mFriends);

console.log(mFriends[2]);
console.log(mFriends[0]);
console.log(mFriends[4]);

// Update a value
mFriends[0] = "Shawn";
console.log(mFriends);

// Add more items
mFriends[6] = "Alan";
console.log(mFriends);

// mFriends[10] = 'Tiffany'
// console.log(mFriends)

mFriends[mFriends.length] = "Rob";
console.log(mFriends);

mFriends.push("Jack");
console.log(mFriends);

// Delete a value
var mName = mFriends.pop();
console.log(mName);
console.log(mFriends);
var mName = mFriends.pop();
console.log(mName);
console.log(mFriends);
var mName = mFriends.pop();
console.log(mName);
console.log(mFriends);
var mName = mFriends.pop();
console.log(mName);
console.log(mFriends);

//Q1. Write a JavaScript program to find the longest string from a given array.

let arr = ["asdf", "sd", "something", "right", "position"];
let maxLength = 0;
let longestString = "";
for (let item of arr) {
  console.log(item);
  if (item.length > maxLength) {
    maxLength = item.length;
    longestString = item;
  }
}
console.log("Longest String in array : " + longestString);

// Q2. Write a JavaScript program to remove '0', false, undefined, null, NaN,'' from given array.

let arr2 = [NaN, 0, 15, false, -22, "", undefined, 47, null, 94];

// approach1
// let arr2Final = [];
// for (let item of arr2) {
//   if (Boolean(item)) {
//     arr2Final.push(item);
//   }
// }
// arr2 = arr2Final;

//approach2
arr2 = arr2.filter(Boolean);

console.log(arr2);

// Q3. Write a JavaScript code to divide a given array of positive integers into two parts. First element goes to first part, second element goes to second part, and third element goes to first part and so on.  Now compute the sum of two parts and store into an array of size two.

let arr3 = [1, 3, 6, 2, 5, 10];
let part1Sum = 0,
  part2Sum = 0;
arr3Final = [];
let num = 0;

for (let item of arr3) {
  if (num % 2 == 1) {
    part1Sum += item;
  } else {
    part2Sum += item;
  }
  num++;
}

arr3Final.push(part1Sum);
arr3Final.push(part2Sum);
console.log(arr3Final);

// Q4. Write a JavaScript program to check whether there is at least one element which occurs in two given sorted arrays of integers.

let arr4_1 = [1, 2, 3];
let arr4_2 = [3, 4, 5];
let output = false;

for (let item1 of arr4_1) {
  for (let item2 of arr4_2) {
    if (item1 == item2) {
      output = true;
      break;
    }
  }
}

console.log(output);

arr4_1 = [1, 2, 3];
arr4_2 = [4, 5, 6];
output = false;
for (let item1 of arr4_1) {
  for (let item2 of arr4_2) {
    if (item1 == item2) {
      output = true;
      break;
    }
  }
}

console.log(output);

// Q5. Write a JavaScript function to find the difference of two arrays.

let arr5_1 = [1, 2, 3];
let arr5_2 = [100, 2, 1, 10];

let arrTemp1 = findDifference(arr5_1, arr5_2);
let arrTemp2 = findDifference(arr5_2, arr5_1);

let arr5Final = arrTemp1.concat(arrTemp2);

function findDifference(arr1, arr2) {
  let diff = [],
    item1,
    item2;

  for (item1 of arr1) {
    let flag = false;
    for (item2 of arr2) {
      if (item1 === item2) {
        flag = true;
        break;
      }
    }

    if (!flag) {
      diff.push(item1);
    }
  }
  return diff;
}

console.log(arr5Final);
