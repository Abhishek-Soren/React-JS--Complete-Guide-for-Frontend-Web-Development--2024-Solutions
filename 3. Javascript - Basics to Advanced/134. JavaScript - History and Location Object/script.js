function goForward() {
  window.history.forward();
}

function goBack() {
  window.history.back();
}

document.getElementById("demo1").innerHTML = "Page location is " + window.location.href;
document.getElementById("demo2").innerHTML = "Page hostname is " + window.location.hostname;
document.getElementById("demo3").innerHTML = "Page path is " + window.location.pathname;
document.getElementById("demo4").innerHTML = "Page protocol is " + window.location.protocol;
document.getElementById("demo5").innerHTML = "Port number is " + window.location.port;
function newDoc() {
  window.location.assign("https://www.google.com");
}
