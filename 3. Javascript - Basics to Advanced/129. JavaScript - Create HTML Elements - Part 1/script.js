let list = document.getElementById("list");
let btnAdd = document.getElementById("btn-add");

btnAdd.addEventListener("click", function () {
  let listElementCount = list.childElementCount;
  let newELementNode = document.createElement("li");
  let newTextNode = document.createTextNode("List Item " + (listElementCount + 1));
  newELementNode.id = "item" + (listElementCount + 1);
  newELementNode.appendChild(newTextNode);
  list.appendChild(newELementNode);
  console.log(newELementNode);
});

let btnRemove = document.getElementById("btn-remove");

btnRemove.addEventListener("click", function () {
  if (list.childElementCount == 0) {
    alert("Cant Remove More List Items");
  }

  let currentID = "item" + list.childElementCount;
  let currListItem = document.getElementById(currentID);
  currListItem.remove();
});

let btnBefore = document.getElementById("btn-before");

btnBefore.addEventListener("click", function () {
  let firstChild = list.firstElementChild;
  let listElementCount = list.childElementCount;
  let newELementNode = document.createElement("li");
  let newTextNode = document.createTextNode("List Item " + (listElementCount + 1));
  newELementNode.id = "item" + (listElementCount + 1);
  newELementNode.appendChild(newTextNode);
  list.insertBefore(newELementNode, firstChild);
});

let btnText = document.getElementById("btn-text");
let inputText = document.getElementById("text");

btnText.addEventListener("click", function (e) {
  e.preventDefault();
  if (inputText.value === "") {
    alert("Must add an Input");
  } else {
    let listElementCount = list.childElementCount;
    let newELementNode = document.createElement("li");
    let newTextNode = document.createTextNode(inputText.value);
    newELementNode.id = "item" + (listElementCount + 1);
    newELementNode.appendChild(newTextNode);
    list.appendChild(newELementNode);
    e.preventDefault();
    inputText.value = "";
  }
});
