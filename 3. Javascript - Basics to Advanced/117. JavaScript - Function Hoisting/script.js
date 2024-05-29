console.clear();

//approach 1

sum(10, 20);
sum(100, 200);

function sum(num1, num2) {
  console.log(num1 + num2);
}

sum(10, 90);

//approach 2

// sum(10, 20); //these give an error
// sum(100, 200);  //function not defined

// var sum = function(num1, num2) { //here, sum is treated as a variable and is hoisted and has value 'undefined'
//   console.log(num1 + num2);
// }

// sum(10, 90); //but now as through initialization sum is now a function, thus this line works

// sum(10, 20); // similar to the previos example, gives an error, funtion does not exist
// sum(100, 200); //

//approach 3

// var sum = (num1, num2) => { //here, sum is treated as a variable and is hoisted and has value 'undefined'
//   console.log(num1 + num2);
// }

// sum(10, 90); //but now as through initialization and definition sum is now a function, thus this line works
