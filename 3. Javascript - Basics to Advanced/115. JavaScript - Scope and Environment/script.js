console.clear();

let num1 = 100; // global scope

function myFunction() {
  let num2 = 200; // function scope
  console.log("Inside Function : ");
  console.log("num1 = " + num1);
  console.log("num2 = " + num2);
  // console.log("num3 = "+ num3);
}

myFunction();

if (true) {
  let num3 = 500; // block scope
  console.log("Inside if Block : ");
  console.log("num1 = " + num1);
  // console.log("num2 = "+ num2);
  console.log("num3 = " + num3);
}

console.log("Inside Globe scope : ");
console.log("num1 = " + num1);
// console.log("num2 = "+ num2);
// console.log("num3 = "+ num3);
