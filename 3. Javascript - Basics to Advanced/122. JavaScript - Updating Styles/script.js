let bodyElement = document.querySelector("div");
let element = document.getElementById("head");

bodyElement.style.backgroundImage = "linear-gradient(45deg, #845EC2, #FF6F91)";
let i = 10;
let fSize = 650;
let w = 100;

var interval = setInterval(function () {
  fSize = fSize > 100 ? fSize - 50 : 100;
  element.style.fontSize = fSize + "px";
  element.innerHTML = i--;

  console.log(element);
  bodyElement.style.width = w + "%";
  w = w > 0 ? w - 10 : 0;

  if (i < 0) {
    clearInterval(interval);
  }
}, 1500);
