console.clear();

// function mSum() {
// 	var num1 = 10;
// 	var num2 = 20;
// 	var sum = num1 + num2;
// 	console.log(sum)
// }

// mSum()

function mSum() {
  var num1 = 40;
  var num2 = 20;
  var sum = num1 + num2;

  return sum;
  console.log("Im a print statement"); // would not get printed
}

var totalSum = 100 + mSum();
console.log(totalSum);
