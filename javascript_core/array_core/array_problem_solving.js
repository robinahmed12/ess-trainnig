
// Task: Calculate total price of in-stock items after discount
const carts = [
  { name: "Shirt", price: 25, quantity: 2, inStock: true },
  { name: "Shoes", price: 80, quantity: 1, inStock: true, discount: 0.1 },
  { name: "Hat", price: 15, quantity: 3, inStock: false },
  { name: "Pants", price: 40, quantity: 1, inStock: true },
];

const total = carts
  .filter((item) => item.inStock)
  .map((item) => {
    const subTotal = item.price * item.quantity;
    return subTotal - subTotal * (item.discount || 0);
  })
  .reduce((sum , price)=> sum + price, 0)
  console.log(`total : $${total.toFixed(2)}`);


  // Task: Find available products under budget with category filter

  const product = [
  { name: 'Laptop', price: 999, category: 'electronics', inStock: true },
  { name: 'Book', price: 15, category: 'education', inStock: true },
  { name: 'Phone', price: 699, category: 'electronics', inStock: false },
  { name: 'Chair', price: 150, category: 'furniture', inStock: true },
  { name: 'Tablet', price: 299, category: 'electronics', inStock: true }
];

const budget = 500
const categoryFilter= "electronics"
const filterProduct = product
.filter(p => p.inStock)
.filter(p=> p.price <= budget)
.filter(p=> p.category === categoryFilter)
.sort((a,b)=> a.price - b.price)
console.log(filterProduct)

// Task: Calculate multiple statistics from data

const testScores = [85, 92, 78, 90, 88, 95, 76, 85, 91, 87];

const stats = {
  average: testScores.reduce((sum, score) => sum + score, 0) / testScores.length,
  max: Math.max(...testScores),
  min: Math.min(...testScores),
  passed: testScores.filter(score => score >= 80).length,
  failed: testScores.filter(score => score < 80).length,
  distribution: testScores.reduce((acc, score) => {
    const range = Math.floor(score / 10) * 10;
    acc[range] = (acc[range] || 0) + 1;
    return acc;
  }, {})
};

console.log(stats);


// Given [1, 2, 2, 3, 4, 4, 5], remove duplicates using .filter() and .indexOf()
const number = [1, 2, 2, 3, 4, 4, 5];

const uniqueNumbers = number.filter((value, index, array) => {
  return array.indexOf(value) === index;
});
console.log(uniqueNumbers);

// const uniqueNumbers = [...new Set(numbers)];

// console.log(uniqueNumbers);

// Count how many times "apple" appears in ["apple", "orange", "apple", "banana"] using .reduce()

const fruits = ["apple", "orange", "apple", "banana"];

const appleCount = fruits.reduce((count, fruit) => {
  return fruit === "apple" ? count + 1 : count;
}, 0);
console.log(appleCount);

// Merge [1,2,3] and [3,4,5] into [1,2,3,4,5] using .concat() and .filter()

const num1 = [1, 2, 3];
const num2 = [1, 2, 3, 4, 5];
const combined = num1.concat(num2);
console.log(combined);
const uniqueMerge = combined.filter(
  (value, index) => combined.indexOf(value) === index
);
console.log(uniqueMerge);

// Check if every element in [2,4,6,8] is even (use .every())
// Check if some elements in [1,3,5,6] are even (use .some())

const numbers1 = [2, 4, 6, 8];
const allEven = numbers1.every((n) => n % 2 === 0);
console.log(allEven);

const numbers2 = [1, 3, 5, 6];
const hasEven = numbers2.some((n) => n % 2 === 0);
console.log(hasEven);

// real world scenario

const cart = [
  { item: "Book", price: 200 },
  { item: "Pen", price: 50 },
  { item: "Laptop", price: 50000 },
];
// Calculate total cost using .reduce()

const totalCost = cart.reduce((acc, product) => acc + product.price, 0);
console.log(totalCost);

const students = [
  { name: "Alice", marks: 85 },
  { name: "Bob", marks: 92 },
  { name: "Charlie", marks: 78 },
];
// Find the student with highest marks using .reduce()

const topStudent = students.reduce((highest, current) => {
  return current.marks > highest.marks ? current : highest;
});
console.log(topStudent);

const products1 = [
  { name: "Shirt", category: "Clothing" },
  { name: "Laptop", category: "Electronics" },
  { name: "Shoes", category: "Clothing" },
];
// Output:
// {
//   Clothing: ["Shirt", "Shoes"],
//   Electronics: ["Laptop"]
// }
// (Use .reduce())

const grouped = products1.reduce((acc, item) => {
  if (!acc[item.category]) {
    acc[item.category] = [];
  }

  acc[item.category].push(item.name);
  return acc;
}, {});

console.log(grouped);

const products = [
  { name: "Phone", price: 800 },
  { name: "Earphones", price: 50 },
  { name: "Laptop", price: 1200 },
];
// Keep only products with price >= 100 using .filter()
