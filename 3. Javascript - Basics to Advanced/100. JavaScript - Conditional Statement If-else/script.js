if (5 > 7) {
  console.log("5 > 7");
} else if (7 > 8) {
  console.log("7 > 8");
} else {
  console.log("Nothing");
}

var length = 200;
var breadth = 200;

if (length == breadth) {
  console.log("Square");
} else {
  console.log("Rectangle");
}

var length = 200;
var breadth = 100;

if (length == breadth) {
  console.log("Square");
} else {
  console.log("Rectangle");
}

//Write some code to check which number is greatest. Change values and see if your code works or not.
var num1 = 50,
  num2 = 800,
  num3 = 20;
if (num1 > num2) {
  if (num1 > num3) {
    console.log(num1);
  } else {
    console.log(num3);
  }
} else {
  if (num2 > num3) {
    console.log(num2);
  } else {
    console.log(num3);
  }
}

//A school has following rules for grading system:
var enteredMarks = 80;

if (enteredMarks > 80) {
  console.log("Grade A");
} else if (enteredMarks > 60) {
  console.log("Grade B");
} else if (enteredMarks > 50) {
  console.log("Grade C");
} else if (enteredMarks > 45) {
  console.log("Grade D");
} else if (enteredMarks > 25) {
  console.log("Grade E");
} else {
  console.log("Grade F");
}

/* A shop will give a discount of 10% if the cost of the purchased quantity is more than 1000.  Suppose, one unit will cost 100. Change the value of numberOfItemPurchased and print 
total cost for the user. */
var numberOfItemPurchased = 6;
var totalAmount = numberOfItemPurchased * 100;
var amtToBePaid = 0;

if (totalAmount > 1000) {
  amtToBePaid = totalAmount - totalAmount * 0.1;
  console.log("You've received a discount of 10%. AMount to be paid is ", amtToBePaid);
} else {
  amtToBePaid = totalAmount;
  console.log("You've not received any discount. AMount to be paid is ", amtToBePaid);
}
