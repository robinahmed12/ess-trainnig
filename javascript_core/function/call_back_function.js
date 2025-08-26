// Calculator with Callback
function calculator(a, b, operation) {
  return operation(a, b);
}

const add = (x, y) => x + y;
const multiply = (x, y) => x * y;

console.log(calculator(5, 3, add));
console.log(calculator(5, 3, multiply));

// Authentication Check

function login(user, callbackSuccess, callbackError) {
  if (user === "admin") {
    callbackSuccess("welcome admin");
  } else {
    callbackError("access denied");
  }
}

login(
  "admin",
  (msg) => console.log(msg),
  (err) => console.log(err)
);

// Sorting with Callback
const names = ["zara", "alex", "mike"];
names.sort((a, b) => a.localeCompare(b));
console.log(names);

// Shopping Cart Total

function calculateTotal(items, callback) {
  let total = 0;
  for (const price of items) total += price;
  callback(total);
}
calculateTotal([19,20,40], total => console.log("total", total));

// Basic Greeting Callback

function greet(name , callback){
    console.log("hello", + name);
    callback()
    
}

function sayBye() {
    console.log("good bye")
}

greet("Robin", sayBye)