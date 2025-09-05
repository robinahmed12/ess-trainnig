//Temperature Converter
function convertTemperature(temp, unit, callback) {
  let result;
  if (unit === "ctoF") {
    result = (temp * 9) / 5 + 32;
    callback(`${temp}°C = ${result}°F`);
  } else {
    result = ((temp - 32) * 5) / 9;
    callback(`${temp}°F = ${result}°C`);
  }
}

convertTemperature(25 , "ctoF", function(result){
  console.log(result);
  
})


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
calculateTotal([19, 20, 40], (total) => console.log("total", total));

// Basic Greeting Callback

function greet(name, callback) {
  console.log("hello", +name);
  callback();
}

function sayBye() {
  console.log("good bye");
}

greet("Robin", sayBye);

function createEmail(user, callback) {
  let msg = `${user} welcome to bd`;
  callback(msg);
}

function sendEmail(content) {
  console.log(content);
}

createEmail("Robin", sendEmail);

//

function totalSum(a, b, callback) {
  let sum = a + b;
  callback(sum);
}

function showTotal(result) {
  console.log(result);
}

totalSum(10, 20, showTotal);
