let text = "THIS This this";

let result1 = text.match(/[THIS]/g);
let result2 = text.match(/[THIS]/gi);

document.getElementById("demo1").innerHTML = result1 + "<br>" + result2;

text = "Is this all there is?";
let pattern = /[^h]/g;
let result = text.match(pattern);

document.getElementById("demo2").innerHTML = result;

text = "123456789";
pattern = /[1-4]/g;
result = text.match(pattern);

document.getElementById("demo3").innerHTML = result;

text = "123456789";
pattern = /[^1-4]/g;
result = text.match(pattern);

document.getElementById("demo4").innerHTML = result;

text = "re, green, green, red, green, gren, gr, blue, yellow";
pattern = /(red|green)/g;
result = text.match(pattern);

document.getElementById("demo5").innerHTML = result;
