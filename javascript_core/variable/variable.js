// var

var greeter;
console.log(greeter);

var greeter = "say hi";
time = 4;

if (time > 3) {
  var greeter = " say hello instead of";
}
// console.log(greeter); print  say hello instead of
// So, since times > 3 returns true, greeter is redefined to "say Hello instead". While this is not a problem if you knowingly want greeter to be redefined, it becomes a problem when you do not realize that a variable greeter has already been defined before.

// If you have used greeter in other parts of your code, you might be surprised at the output you might get. This will likely cause a lot of bugs in your code. This is why let and const are necessary.

// let

let greeting = "say hi";

times = 4;
if (times > 3) {
  let greeting = "say hello instead of";
  console.log(greeting);
}
// console.log(greeting); print say hi

//  let is block scoped
// A block is a chunk of code bounded by {}. A block lives in curly braces. Anything within curly braces is a block.

// So a variable declared in a block with let is only available for use within that block.

// const
const myDetails = {
  name: "Robin Ahmed",
  age: 30,
};
// myDetails = "dhaka"
// console.log(myDetails); type error
myDetails.name = "shawon";
console.log(myDetails);

// Const
// Variables declared with the const maintain constant values. const declarations share some similarities with let declarations.

// const declarations are block scoped
// Like let declarations, const declarations can only be accessed within the block they were declared.

// const cannot be updated or re-declared
// This means that the value of a variable declared with const remains the same within its scope. It cannot be updated or re-declared. So if we declare a variable with const, we can neither do this:


// So just in case you missed the differences, here they are:

// var declarations are globally scoped or function scoped while let and const are block scoped.
// var variables can be updated and re-declared within its scope; let variables can be updated but not re-declared; const variables can neither be updated nor re-declared.
// They are all hoisted to the top of their scope. But while var variables are initialized with undefined, let and const variables are not initialized.
// While var and let can be declared without being initialized, const must be initialized during declaration.



