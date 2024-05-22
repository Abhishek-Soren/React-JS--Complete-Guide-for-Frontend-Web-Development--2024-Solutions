document.getElementById("demo2").innerHTML =
  'parseInt("10") = ' +
  parseInt("10") +
  "<br>" +
  'parseInt("10.00") = ' +
  parseInt("10.00") +
  "<br>" +
  'parseInt("10.33") = ' +
  parseInt("10.33") +
  "<br>" +
  'parseInt("34 35 36") = ' +
  parseInt("34 45 66") +
  "<br>" +
  'parseInt("    60    ") = ' +
  parseInt("   60   ") +
  "<br>" +
  'parseInt("40 years") = ' +
  parseInt("40 years") +
  "<br>" +
  'parseInt("He was 40.") = ' +
  parseInt("He was 40");

document.getElementById("demo3").innerHTML =
  "parseFloat(10) = " +
  parseFloat(10) +
  "<br>" +
  'parseFloat("10") = ' +
  parseFloat("10") +
  "<br>" +
  'parseFloat("10.33") = ' +
  parseFloat("10.33") +
  "<br>" +
  'parseFloat("34 45 66") = ' +
  parseFloat("34 45 66") +
  "<br>" +
  'parseFloat("He was 40.") = ' +
  parseFloat("He was 40");

let num = 5.56789;
let n = num.toFixed(10);
let test = 213.73175;

document.getElementById("demo4").innerHTML =
  "num = " +
  num +
  "<br>" +
  "n = num.toFixed(10)" +
  "<br>" +
  " n = " +
  n +
  "<br>" +
  "<br>" +
  "test = " +
  test +
  "<br>" +
  "test.toFixed(3) = " +
  test.toFixed(3) +
  "<br>" +
  "<br>" +
  "test = " +
  test +
  "<br>" +
  "test.toFixed() = " +
  test.toFixed();

num = 123;
n = num.toString(2);
test = 11;
document.getElementById("demo1").innerHTML =
  "num = " +
  num +
  "<br>" +
  "n = num.toString(2)" +
  "<br>" +
  " n = " +
  n +
  "<br>" +
  "<br>" +
  "test = " +
  test +
  "<br>" +
  "test.toString(16) = " +
  test.toString(16) +
  "<br>" +
  "<br>" +
  "test = " +
  test +
  "<br>" +
  "test.toString() = " +
  test.toString();
