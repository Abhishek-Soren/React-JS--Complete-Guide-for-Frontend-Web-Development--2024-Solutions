console.clear();

if (5 == "5") {
  console.log(true);
}
if (5 === 5) {
  console.log(true);
} else {
  console.log(false);
}
if (5 != "5") {
  console.log(true);
} else {
  console.log(false);
}
if (5 !== "5") {
  console.log(true);
} else {
  console.log(false);
}
if (15 < 15) {
  console.log(true);
} else {
  console.log(false);
}
if (15 <= 15) {
  console.log(true);
} else {
  console.log(false);
}
if (15 > 15) {
  console.log(true);
} else {
  console.log(false);
}
if (15 >= 15) {
  console.log(true);
} else {
  console.log(false);
}

//Logical Operators &&, ||, !
if (5 > 10 && 10 > 15) {
  console.log(true);
} else {
  console.log(false);
}
console.log(5 < 10 || 10 < 15);
console.log(!(5 < 10));

//Ternary Operator (expression) ? a : b
20 < 3 ? console.log(true) : console.log(false);

//What will be printed in the console?

var a = 10;
var b = 5;
var c = 12;
var e = 8;
var d;

d = (a * (c - b)) / e + (b + c);
console.log(d);

d = (e * (c + a)) / (b + c) + a;
console.log(d);
d = (a * (c - b)) / e + (b + c) <= (e * (c + a)) / (b + c) + a;
var i = d ? 1 : 0;
console.log(d);
console.log(i);

//What will be printed in the console?

var n = 2;
var p = 4;
var q = 5;
var w = 3;
console.log((p * q) / n);
console.log(q * w + n / p);
if (!((p * q) / n <= q * w + n / p)) {
  console.log(++p + w++ + " " + ++n);
} else {
  console.log(--p + q-- + " " + --n);
}
