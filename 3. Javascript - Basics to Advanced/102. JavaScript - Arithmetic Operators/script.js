console.clear();

// What will be printed in the console?

var num1 = 1 + 5;
var num2 = num1 / 4;
var num3 = 1 + 5;
var num4 = num3 / 4;
console.log(num2 + " " + num4);

// What will be printed in the console?

var a = 1;
var b = 2;
var c;
var d;
c = ++b;
d = a++;
c++;
b++;
++a;
console.log(a + " " + b + " " + c + " " + d);

// What will be printed in the console?

var input = 7;
var output1 = ++input + ++input + ++input;
console.log(output1);

var input = 7;
var output2 = input++ + input++ + input++;
console.log(output2);

var input = 7;
var output3 = input++ + ++input + input++;
console.log(output3);

// What will be printed in the console?

var input = 7;
var output1 = ++input + ++input + ++input;
var output2 = input++ + input++ + input++;
var output3 = input++ + ++input + input++;

console.log(output1 + " " + output2 + " " + output3);

console.log(input);
