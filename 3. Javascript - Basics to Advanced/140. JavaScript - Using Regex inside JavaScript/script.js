let str =
  "This is a black ball pen. using this pen your writing becomes realley smooth. Its a Sakura fineliner PEN";

let pattern1 = /pen/;
let pattern2 = /penee/;
let pattern3 = /pen/g;
let pattern4 = /pen/gi;
let pattern5 = new RegExp("pen", "gi"); //same as /pen/gi;

console.log(pattern1.test(str));
console.log(pattern2.test(str));

console.log(str.search(pattern1));
console.log(str.search(pattern2));

console.log(str.match(pattern1));
console.log(str.match(pattern2));
console.log(str.match(pattern3));
console.log(str.match(pattern4));
console.log(str.match(pattern5));
