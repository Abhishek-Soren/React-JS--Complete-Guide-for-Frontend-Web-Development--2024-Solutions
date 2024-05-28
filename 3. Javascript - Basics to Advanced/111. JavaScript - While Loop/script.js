console.clear();

// while(condition) {
// 	// block of code
// }

var mValue = 0;
while (mValue < 50) {
  mValue++;
}

console.log(mValue);

// Q1. Write a JavaScript program to find the GCD of two numbers : 15 and 25.

// [ The GCD or Greatest Common Divisor of two integers is the largest integer that divides each of the integers such that their remainder is zero.]

function gcd(num1, num2) {
  let gcd = 1,
    num = 1;
  if (num1 > num2) {
    let temp = num1;
    num1 = num2;
    num2 = temp;
  }

  while (num <= num1) {
    if (num1 % num === 0 && num2 % num === 0) {
      gcd = num;
    }
    num++;
  }

  return gcd;
}

let num1 = 15,
  num2 = 25;

let result1 = gcd(num1, num2);
console.log(result1);

// Q2. Write a JavaScript program to print the LCM of two numbers: 15 and 20?

// [A common multiple is a number that is a multiple of two or more integers. e.g. The common multiples of 3 and 4 are 0, 12, 24, .... The least common multiple (LCM) of two numbers is the smallest number (not zero) that is a multiple of both.]

// LCM = product of two numbers ÷ HCF of two numbers

function gcd(num1, num2) {
  let gcd = 1,
    num = 1;
  if (num1 > num2) {
    let temp = num1;
    num1 = num2;
    num2 = temp;
  }

  while (num <= num1) {
    if (num1 % num === 0 && num2 % num === 0) {
      gcd = num;
    }
    num++;
  }

  return gcd;
}

(num1 = 5), (num2 = 18);

let result2 = (num1 * num2) / gcd(num1, num2);
console.log(result2);

// Q3. Write a JavaScript program to find the number of even values in sequence before the first occurrence of a given number. [Hint: You can use while loop here]

let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let num3 = 9;

function evenValueOccurences(arr, num) {
  let count = 0;
  let i = 0;
  while (arr[i] < num) {
    if (arr[i] % 2 == 0) {
      count++;
    }
    i++;
  }
  return count;
}

let numOfEvenValues = evenValueOccurences(arr3, num3);

console.log(numOfEvenValues);

// Q4. Write a JavaScript program to sum the multiples of 3 and 5 under 1000.

let multiple1 = 3,
  multiple2 = 5;
let upperLimit = 1000;
let sumOfMultiples = 0;

let j = 1;

while (j < upperLimit) {
  if (j % 3 === 0 || j % 5 === 0) {
    sumOfMultiples += j;
  }
  j++;
}

console.log(sumOfMultiples);

// Q5. Write a JavaScript program which iterates the integers from 1 to 15. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

let upperLimit5 = 15;
let k = 1;

while (k <= upperLimit5) {
  if (k % 3 === 0) {
    console.log(k, "Fizz");
  } else if (k % 5 === 0) {
    console.log(k, "Buzz");
  } else {
    console.log(k);
  }
  k++;
}
