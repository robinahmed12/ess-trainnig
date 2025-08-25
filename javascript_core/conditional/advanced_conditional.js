// 1. Shopping Cart Discount
let totalPrice = 600;
if (totalPrice > 500) {
  console.log("payable amount", (totalPrice * 20) / 100);
} else if (totalPrice > 200 && totalPrice <= 500) {
  console.log("payable amount", (totalPrice * 10) / 100);
} else {
  console.log("no discount");
}
// ternary
let PayableAmount =
  totalPrice > 500
    ? (totalPrice * 20) / 100
    : totalPrice > 200 && totalPrice <= 500
    ? (totalPrice * 10) / 100
    : totalPrice;

// 2. E-Commerce Free Shipping

const orderAmount = 300;
const userHas = "prime membership";

if (orderAmount === 300 || userHas === "prime membership") {
  console.log("free shipping");
} else {
  console.log("free shipping cost $50");
}

const orderAmount1 = 300;
const userHas1 = "prime membership";

console.log(
  orderAmount1 > 300 || userHas1 === "prime membership"
    ? "Free Shipping"
    : "Shipping cost $50"
);

// 3. Movie Ticket Pricing

const age = 15;
const day = "wednesday";
let ticket;

if (age < 12) {
  console.log("ticket", (ticket = 5));
} else if (age <= 17) {
  console.log("ticket", (ticket = 7));
} else if (age >= 18) {
  console.log("ticket", (ticket = 12));
} else {
  console.log("");
}

if (day === "wednesday") {
  console.log("50% discount on all tickets.", ticket * 0.5);
}

// ternary

let ticket1 = age < 12 ? 5 : age <= 17 ? 7 : 12;
console.log(
  day.toLowerCase() === "wednesday"
    ? `50% discount applied: ${ticket * 0.5}`
    : "No discount today"
);

// 4. ATM Withdrawal

let amount = 500;
const accountBalance = 1000;

if (amount > accountBalance) {
  console.log("Insufficient Funds");
} else if (amount % 100 != 0) {
  console.log("Enter multiples of 100");
} else {
  console.log("transaction successful");
}

// 5. Restaurant Bill with Tip

const bill = 50;
let tip;

if (bill < 50) {
  console.log("tip", (tip = bill * 0.2));
} else if (bill >= 50 && bill <= 200) {
  console.log("tip", (tip = bill * 1.5));
} else if (bill > 200) {
  console.log("tip", (tip = bill * 0.1));
}

console.log("Total Payable:", bill + tip);
