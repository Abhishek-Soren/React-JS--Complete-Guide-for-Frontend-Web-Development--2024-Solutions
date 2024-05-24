let carName1 = "Volvo XC60"; // Double quotes
let carName2 = "Volvo XC60"; // Single quotes

document.getElementById("demo1").innerHTML = carName1 + " " + carName2;

let answer1 = "It's alright";
let answer2 = "He is called 'Johnny'";
let answer3 = 'He is called "Johnny"';

document.getElementById("demo2").innerHTML = answer1 + "<br>" + answer2 + "<br>" + answer3;

let text = 'We are the so-called "Vikings" from the north.';
document.getElementById("demo3").innerHTML = text;

text = "It's alright.";
document.getElementById("demo4").innerHTML = text;

text = `The quick brown fox jumps over the lazy dog`;

document.getElementById("demo5").innerHTML = text;
