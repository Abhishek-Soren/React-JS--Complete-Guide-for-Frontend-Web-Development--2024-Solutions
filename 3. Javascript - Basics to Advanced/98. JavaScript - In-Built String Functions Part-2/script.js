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

var str1 = "Today is";
var str2 = " A beautiful day ";
console.log(str2);
str2 = str2.trimEnd();
console.log(str2);
var str2_ = str2.toLowerCase();
console.log(str2_);
var str3 = " In Hawaii. ";
var str3_ = str3.replace("I", "i");
console.log(str3_);

var Result = str1 + str2_ + str3_;
console.log(Result);

var mStr = "Mo Tu We Th Fr Sa Su";
console.log(mStr);
mStr = mStr.toUpperCase();
console.log(mStr);

let arr = mStr.split(" ");
console.log(arr);
