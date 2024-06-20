console.clear();

// Create an Object
const obj = {
  firstName: "Abhishek",
  lastName: "Soren",

  display: () => {
    console.log(obj.firstName);
    console.log(obj.lastName);
  },

  displayAgain: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

obj.display();

const newObj = obj;

newObj.firstName = "Potato";

newObj.display();
obj.display();

// Invoke displayAgain
console.log(obj.displayAgain());
