console.clear();

var mNum = 15;
console.log(typeof String(mNum));
console.log(typeof String(true));
console.log(typeof String(-98.1));
console.log(typeof String(null));
console.log(typeof String(undefined));

// To Number
console.log(typeof Number("2"));
console.log(Number(true), typeof Number(true));
console.log(Number(false), typeof Number(true));
console.log(Number("-90.234"), typeof Number("-90.234"));
console.log(Number("apple"), typeof Number("apple"));

//To Boolean
console.log(Boolean(1), typeof Boolean(1));
console.log(Boolean(0), typeof Boolean(0));
console.log(Boolean("Apple"), typeof Boolean("Apple"));
console.log(Boolean(null), typeof Boolean(null));
console.log(Boolean(undefined), typeof Boolean(undefined));
console.log(Boolean(""), typeof Boolean(""));

//Q1. What will be printed in the console?

console.log(String(123));
console.log(String(-12.3));
console.log(String(null));
console.log(String(undefined));
console.log(String(true));
console.log(String(false));

//Q2. What will be printed in the console?

console.log(Boolean(""));
console.log(Boolean("Hello"));
console.log(Boolean(0));
console.log(Boolean(200));
console.log(Boolean(-0));
console.log(Boolean(-200));
console.log(Boolean(NaN));
console.log(Boolean(null));

//Q3. What will be printed in the console?

console.log(Number(null));
console.log(Number(undefined));
console.log(Number(true));
console.log(Number(false));
console.log(Number(" 12 "));
console.log(Number("-12.34"));
console.log(Number("\n"));
console.log(Number(" 12s "));
console.log(Number(""));
console.log(Number(123));
