document.getElementById(
  "demo1"
).innerHTML = `The text is from the external JavaScript file using ' document.getElementById("demo1") '.`;

console.log(document.getElementById("heading"));

let elements = document.getElementsByClassName("demo2");
for (let i = 0; i < elements.length; i++) {
  elements[
    i
  ].innerHTML = `The text is from the external JavaScript file using 'document.getElementsByClassName("demo2")'.`;
}

console.log(document.getElementsByClassName("text"));

console.log(document.getElementsByTagName("span"));
