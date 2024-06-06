let h1Element = document.getElementById("heading");
let btnIncrease = document.getElementById("btn-increase");
let btnDecrease = document.getElementById("btn-decrease");

let newFontSize = 0;

let initialFontSize = window.getComputedStyle(h1Element).fontSize;
initialFontSize = parseInt(initialFontSize.substring(0, initialFontSize.length - 2));

newFontSize = initialFontSize;

btnIncrease.onclick = increaseFontSize;

function increaseFontSize() {
  if (newFontSize <= 195) {
    newFontSize += 5;
    h1Element.style.fontSize = newFontSize + "px";
  } else {
    alert("Reached Max Font Size limit.");
  }
}

btnDecrease.onclick = decreaseFontSize;

function decreaseFontSize() {
  if (newFontSize >= 15) {
    newFontSize -= 5;
    h1Element.style.fontSize = newFontSize + "px";
  } else {
    alert("Reached Min Font Size limit.");
  }
}
