let over = document.getElementById("over");
let overCount = 0;
over.addEventListener("mouseover", function () {
  let overCountElement = document.querySelector("#text1 > p");
  overCount++;
  overCountElement.innerHTML = overCount;
});

let enter = document.getElementById("enter");
let enterCount = 0;
enter.addEventListener("mouseenter", function () {
  let enterCountElement = document.querySelector("#text2 > p");
  enterCount++;
  enterCountElement.innerHTML = enterCount;
});

let move = document.getElementById("move");
let moveCount = 0;
move.addEventListener("mousemove", function () {
  let moveCountElement = document.querySelector("#text3 > p");
  moveCount++;
  moveCountElement.innerHTML = moveCount;
});

let btnElement = document.getElementById("btn");

btnElement.addEventListener("mousedown", function () {
  console.log("Mouse Down Event");
});

btnElement.addEventListener("mouseup", function () {
  console.log("Mouse Up Event");
});

btnElement.addEventListener("click", function () {
  console.log("Click Event");
});

btnElement.addEventListener("dblclick", function () {
  console.log("Double Click Event");
});
