let username = document.getElementById("username");
let form = document.getElementById("form");
let errorMessage = document.getElementById("error");

// Approach 1

// username.addEventListener("input", function (event) {
//   // Define the regex pattern for a valid username
//   let pattern = /^[\w]{6,12}$/;

//   // Check if an error message already exists and remove it if it does
//   if (document.getElementById("temp-node")) {
//     let node = document.getElementById("temp-node");
//     form.removeChild(node);
//   }

//   // Check if the current input value matches the pattern
//   if (!pattern.test(event.target.value)) {
//     // Create a new paragraph element for the error message
//     let tempNode = document.createElement("p");
//     tempNode.id = "temp-node"; // Set the ID to 'temp-node'
//     tempNode.textContent =
//       "Please enter a valid Username. Username should only have alphabets and digits and be 6 to 12 characters long.";

//     // Insert the error message after the username input field
//     username.after(tempNode);
//   }
// });

// Approach 2

username.addEventListener("input", function (event) {
  let pattern = /^[\w]{6,12}$/;
  if (pattern.test(event.target.value)) {
    errorMessage.style.display = "none";
  } else {
    errorMessage.style.display = "block";
  }
});
