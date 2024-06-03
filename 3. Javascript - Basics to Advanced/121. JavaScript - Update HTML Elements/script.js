const element = document.getElementById("title");
var bgImg = document.getElementById("bg");
var i = 10;
setInterval(function () {
  if (i % 2 == 0) {
    bgImg.style.backgroundImage = "linear-gradient(45deg, #845EC2, #FF6F91)";
    console.group("even");
  } else {
    bgImg.style.backgroundImage = "linear-gradient(45deg, #051937, #A8EB12)";
    console.group("odd");
  }
  element.innerHTML = i--;
  console.log(i);

  if (i < 0) {
    element.innerHTML = 0;
  }
}, 1500);
