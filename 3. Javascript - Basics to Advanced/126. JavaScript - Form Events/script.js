let username = document.getElementById("username");
let userForm = document.getElementById("user-form");

username.oninput = function (event) {
  console.log("value changed");

  let currValue = event.target.value;
  console.log(currValue.toUpperCase());
  username.value = currValue.toUpperCase();
};

username.addEventListener("focus", function () {
  console.log("Username On Focus");
});

username.addEventListener("blur", function () {
  console.log("Username Lost Focus");
});

userForm.addEventListener("submit", function (event) {
  alert("You have submitted the form.");
  event.preventDefault();
});
