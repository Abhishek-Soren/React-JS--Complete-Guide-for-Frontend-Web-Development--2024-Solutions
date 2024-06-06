let h1ElementList = document.getElementById("heading").classList;
let btn = document.querySelector("button");

btn.onclick = myFunction;

function myFunction() {
  h1ElementList.toggle("big");
}
