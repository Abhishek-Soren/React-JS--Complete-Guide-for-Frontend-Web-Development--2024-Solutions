function myFunction() {
  let str1 = "POTAATO is the best. NO one can deny THAT";
  let regex4 = /[A-Z]/g;
  let match4 = str1.match(regex4);

  console.log("Found " + match4.length + " matches: " + match4);
}

myFunction();
