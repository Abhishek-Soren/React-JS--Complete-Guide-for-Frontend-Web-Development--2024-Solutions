let str = "I will do my Homework a 100 times.";
let finalStr = "";
for (let i = 1; i <= 100; i++) {
  finalStr += i + ". " + str + "<br>";
}

document.getElementById("demo").innerHTML = finalStr;
