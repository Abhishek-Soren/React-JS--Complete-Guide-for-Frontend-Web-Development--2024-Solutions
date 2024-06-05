var btn = document.getElementById("btn-click");
var divElement = document.querySelector("header > div");

function onButtonCLick() {
  // btn.style.backgroundColor = "lightcoral";
  // btn.style.color = "white";
  // divElement.style.backgroundColor = "white";

  var r = Math.floor(Math.random() * 255);
  var g = Math.floor(Math.random() * 255);
  var b = Math.floor(Math.random() * 255);

  divElement.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
}

//event
// btn.onclick = onButtonCLick;

//event listner
btn.addEventListener("click", onButtonCLick);
