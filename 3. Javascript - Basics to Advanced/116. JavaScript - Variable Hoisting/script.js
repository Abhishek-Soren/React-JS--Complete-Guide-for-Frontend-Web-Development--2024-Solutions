// both are executed before without any errors
// function myFunction() {
//   console.log("Baka janai no?!");
// }
// var x = undefined;
// this is hoisitng. declaring the function and variable according to their respective scopes

myFunction();
console.log(x);

var x = 10;

function myFunction() {
  console.log("Baka janai no?!");
}
