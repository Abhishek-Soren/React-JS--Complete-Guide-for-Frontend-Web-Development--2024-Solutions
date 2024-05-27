console.clear();

var mAgera = {
  name: "Agera",
  manufacturer: {
    name: "Koenigsegg",
    location: "Sweden",
  },
  topSpeed: 429,
  color: "Black",
  spoilers: false,
  applyBrakes: function () {
    setTimeout(function () {
      console.log("Car Stopped");
    }, 5000);
  },
};

console.log(mAgera.name);
console.log(mAgera.topSpeed);
console.log(mAgera.manufacturer);
console.log(mAgera.manufacturer.name);
// console.log(mAgera.applyBrakes())
// console.log(mAgera.applyBrakes)

// Q2. Write a JavaScript program to list the properties of a JavaScript object.
// Q3. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property
//Q4. Write a JavaScript program to get the length of a JavaScript object

let student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};

console.log(Object.keys(student));

student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};

console.log(student);
console.log(Object.keys(student).length);

delete student.rollno;

console.log(student);
console.log(Object.keys(student).length);

//Q5. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.

let library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

for (let book in library) {
  let books = library[book];
  console.log(books);

  if (books.readingStatus) {
    console.log("You have already read '" + books.title + "' by " + books.author + ".");
  } else {
    console.log("You still need to read '" + books.title + "' by " + books.author + ".");
  }
}

// Q1. We have an object of customers for our food delivery app with the information about their past orders with order values. Write a JavaScript program to give a "Premium Membership" to the customer if thecustomer has made at least 5 orders of the minimum value of 20. The customers and their past order history is given below:

let customers_data = {
  Ben10: [22, 30, 11, 17, 15, 52, 27, 12],
  Sameer: [5, 17, 30, 33, 40, 22, 26, 10, 11, 45],
  Zeeshan: [22, 30, 11, 5, 17, 30, 6, 57],
  Potaato: [10, 20, 30, 40, 50, 60],
};

let premiumMembers = [];
const minNumberOfOrders = 5;
const minOrderValue = 20;

// Iterate over each customer
for (let customer in customers_data) {
  // Get the order array for the customer
  let orders = customers_data[customer];

  // Count the number of orders that meet the minimum value
  let count = 0;
  for (let orderValue of orders) {
    if (orderValue >= minOrderValue) {
      count++;
    }
  }

  // Check if the customer qualifies for premium membership
  if (count >= minNumberOfOrders) {
    premiumMembers.push(customer);
  }
}

// Output the premium members
console.log("Premium Members:", premiumMembers);
