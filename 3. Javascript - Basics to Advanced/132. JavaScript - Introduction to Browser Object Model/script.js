const myTimeout = setTimeout(myGreeting, 5000);

function myGreeting() {
  window.alert("Hello World");

  var ans = window.confirm("Are you sure??");
  if (ans) {
    console.log("You are sure.");
  } else {
    console.log("You are not sure");
  }

  var text = prompt("Write some text");
  console.log("your text : " + text);
  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;
  console.log(`Window Width = ${windowWidth} and Window Height = ${windowHeight}`);

  // open("https://www.google.com");

  window.alert("This tab is going to close in 10s.");

  setTimeout(function () {
    close();
  }, 10000);
}
