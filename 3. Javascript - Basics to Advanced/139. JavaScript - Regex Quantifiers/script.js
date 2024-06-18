text = "Hellooo World! Hello W3Schools!";
pattern = /o+/g;
result = text.match(pattern);

document.getElementById("demo1").innerHTML = result;

text = "Hellooo World! Hello W3Schools!";
pattern = /lo*/g;
result = text.match(pattern);

document.getElementById("demo2").innerHTML = result;

text = "1, 100 or 1000?";
pattern = /10?/g;
result = text.match(pattern);

document.getElementById("demo3").innerHTML = result;

text = "100, 1000 or 10000?";
pattern = /\d{4}/g;
result = text.match(pattern);

document.getElementById("demo4").innerHTML = result;

text = "100, 1000 or 10000?";
pattern = /\d{3,4}/g;
result = text.match(pattern);

document.getElementById("demo5").innerHTML = result;

text = "100, 1000 or 10000?";
pattern = /\d{3,}/g;
result = text.match(pattern);

document.getElementById("demo6").innerHTML = result;

text = "Is this his";
pattern = /^Is/g;
result = text.match(pattern);

document.getElementById("demo7").innerHTML = result;

text = "Is this his";
pattern = /is$/;
result = text.match(pattern);

document.getElementById("demo8").innerHTML = result;

text = "Is thisall there is is";
pattern = /is(?=all)/;
result = text.match(pattern);

document.getElementById("demo9").innerHTML = result;

text = "Is this all there is is";
pattern = /is(?! all)/gi;
result = text.match(pattern);

document.getElementById("demo10").innerHTML = result;
