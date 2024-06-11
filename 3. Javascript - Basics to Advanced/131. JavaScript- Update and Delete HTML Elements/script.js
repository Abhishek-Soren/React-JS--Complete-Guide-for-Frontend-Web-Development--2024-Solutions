let text = document.getElementById("add-text");
let list = document.getElementById("list");

function addDeleteSymbol(currItemID) {
  let newDeleteElementNode = document.createElement("span");
  newDeleteElementNode.className = "material-symbols-outlined";
  let newDeleteTextNode = document.createTextNode("delete ");
  let currListItemId = currItemID;
  let currListItem = document.getElementById(currListItemId);
  let curr = currItemID.substring(currItemID.length - 1); // Corrected substring extraction
  let itemNumber = parseInt(curr);
  newDeleteElementNode.id = "del" + itemNumber;
  newDeleteElementNode.appendChild(newDeleteTextNode);
  currListItem.appendChild(newDeleteElementNode);

  newDeleteElementNode.addEventListener("click", function () {
    console.log("Delete symbol clicked for item ID:", currItemID); // Check if event listener is triggered
    removeItem(currItemID);
  });
}

function addItem() {
  if (text.value !== "" && text.value !== undefined && text.value !== null) {
    let newELementNode = document.createElement("li");
    let newTextNode = document.createTextNode(text.value);
    newELementNode.appendChild(newTextNode);
    newELementNode.id = "item" + (list.childElementCount + 1);
    list.appendChild(newELementNode);
    addDeleteSymbol(newELementNode.id);
    text.value = "";
  } else {
    alert("Must add some Text before submitting.");
  }
}

document.body.onkeydown = function (event) {
  if (event.key === "Enter") {
    addItem();
  }
};

let btnAdd = document.getElementById("btn-add");
btnAdd.addEventListener("click", addItem);

let btnRemove = document.getElementById("btn-remove");
btnRemove.addEventListener("click", function () {
  removeItem("item" + list.childElementCount); // Wrap the call in an anonymous function
});

function removeItem(currentID) {
  if (list.childElementCount === 0) {
    alert("Cant Remove More List Items");
  } else {
    let currListItem = document.getElementById(currentID);
    currListItem.remove();
  }
}

let btnUpdate = document.getElementById("btn-update");
btnUpdate.addEventListener("click", function () {
  if (list.childElementCount !== 0) {
    if (text.value !== "" && text.value !== undefined && text.value !== null) {
      let firstChild = list.firstElementChild;
      let newELementNode = document.createElement("li");
      let newTextNode = document.createTextNode(text.value);
      newELementNode.appendChild(newTextNode);
      newELementNode.id = firstChild.id;
      list.replaceChild(newELementNode, firstChild);
      addDeleteSymbol(newELementNode.id);
      text.value = "";
    } else {
      alert("Must add some Text before submitting.");
    }
  } else {
    alert("Must add an Item before updating.");
  }
});
