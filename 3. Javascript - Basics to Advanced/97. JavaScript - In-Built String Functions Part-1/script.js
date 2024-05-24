console.clear();

var myFirstString = "This is a string for Javascript string functions, Javascript";

// Returns the length of the string
console.log(myFirstString.length);

// Find index of a string inside another string
console.log(myFirstString.indexOf("Javascript"));
console.log(myFirstString.indexOf("This"));

// Find LAST index of a string inside another string
console.log(myFirstString.lastIndexOf("Javascript"));
console.log(myFirstString.lastIndexOf("This"));

// Get a part of our string slice(start, end)
console.log(myFirstString.slice(0, 4));
console.log(myFirstString.slice(21, 31));
console.log(myFirstString.slice(-10));
console.log(myFirstString.slice(5));

// Get sub string function - substr(startPos, length)
console.log(myFirstString.substr(0, 4));
console.log(myFirstString.substr(21, 10));
console.log(myFirstString.substr(21));

var mStr =
  "This is my test string to practice the JavaScript string function concepts. This is gonna be fun.";

console.log(mStr.indexOf("."));
console.log(mStr.lastIndexOf("."));

console.log(mStr.slice(0, 74));

console.log(mStr.slice(0, 74).length);

console.log(mStr.slice(76, 96));

console.log(mStr.slice(76, 96).length);

console.log(mStr.indexOf("This"));

console.log(mStr.lastIndexOf("This"));

let str = "HELLO WORLD";
console.log(str.charAt(0));

str = "Aa HELLO WORLD";
console.log(str.charCodeAt(0));
console.log(str.charCodeAt(1)); //negative values don't work
console.log(str.at(0));
console.log(str[0]);

console.log(str.at(-1));
console.log(str[1]); //-1 doesnt work

let stri = "Apple, Banana, Kiwi";
let part = stri.substring(7, 13);
console.log(part);

let part1 = mStr.slice(0, 12);
console.log(part1.length);

let part2 = mStr.substr(0, 12);
console.log(part2.length);
console.log(part2);

let part3 = mStr.substr(-12, 12);
console.log(part3.length);
console.log(part3);

console.log(mStr.slice(0, 12));
console.log(mStr.slice(-12));
