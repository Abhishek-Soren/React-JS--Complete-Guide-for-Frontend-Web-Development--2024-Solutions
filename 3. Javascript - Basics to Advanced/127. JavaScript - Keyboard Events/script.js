// document.body.addEventListener("keydown", function (e) {
//   var keyCode = e.key;
//   console.log(keyCode);
//   console.log("A key was clicked");
// });

document.body.onkeydown = function (event) {
  let key = event.key;
  if (key == "a" || key == "A") {
    let sound1 = document.getElementById("sound1");
    sound1.play();
    let currElement = document.getElementById("item1");
    currElement.classList.add("glow");
  } else if (key == "s" || key == "S") {
    let sound1 = document.getElementById("sound2");
    sound1.play();
    let currElement = document.getElementById("item2");
    currElement.classList.add("glow");
  } else if (key == "d" || key == "D") {
    let sound1 = document.getElementById("sound3");
    sound1.play();
    let currElement = document.getElementById("item3");
    currElement.classList.add("glow");
  } else if (key == "f" || key == "F") {
    let sound1 = document.getElementById("sound4");
    sound1.play();
    let currElement = document.getElementById("item4");
    currElement.classList.add("glow");
  } else if (key == "g" || key == "G") {
    let sound1 = document.getElementById("sound5");
    sound1.play();
    let currElement = document.getElementById("item5");
    currElement.classList.add("glow");
  } else if (key == "h" || key == "H") {
    let sound1 = document.getElementById("sound6");
    sound1.play();
    let currElement = document.getElementById("item6");
    currElement.classList.add("glow");
  } else if (key == "j" || key == "J") {
    let sound1 = document.getElementById("sound7");
    sound1.play();
    let currElement = document.getElementById("item7");
    currElement.classList.add("glow");
  } else if (key == "k" || key == "K") {
    let sound1 = document.getElementById("sound8");
    sound1.play();
    let currElement = document.getElementById("item8");
    currElement.classList.add("glow");
  } else if (key == "l" || key == "L") {
    let sound1 = document.getElementById("sound9");
    sound1.play();
    let currElement = document.getElementById("item9");
    currElement.classList.add("glow");
  }
};

document.body.onkeyup = function (event) {
  let key = event.key;
  if (key == "a" || key == "A") {
    let currElement = document.getElementById("item1");
    currElement.classList.remove("glow");
  } else if (key == "s" || key == "S") {
    let currElement = document.getElementById("item2");
    currElement.classList.remove("glow");
  } else if (key == "d" || key == "D") {
    let currElement = document.getElementById("item3");
    currElement.classList.remove("glow");
  } else if (key == "f" || key == "F") {
    let currElement = document.getElementById("item4");
    currElement.classList.remove("glow");
  } else if (key == "g" || key == "G") {
    let currElement = document.getElementById("item5");
    currElement.classList.remove("glow");
  } else if (key == "h" || key == "H") {
    let currElement = document.getElementById("item6");
    currElement.classList.remove("glow");
  } else if (key == "j" || key == "J") {
    let currElement = document.getElementById("item7");
    currElement.classList.remove("glow");
  } else if (key == "k" || key == "K") {
    let currElement = document.getElementById("item8");
    currElement.classList.remove("glow");
  } else if (key == "l" || key == "L") {
    let currElement = document.getElementById("item9");
    currElement.classList.remove("glow");
  }
};
