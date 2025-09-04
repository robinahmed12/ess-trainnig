const products = [
  { id: 1, name: "Laptop", price: 800 },
  { id: 2, name: "Phone", price: 500 }
];

// Transform products to show price in USD


const productList = products.map(p => `${p.name}-$${p.price}`)
console.log(productList);


const arr = [5, 10, 15, 20];
// Calculate total sum using a for loop
let sum = 0;
for (let i= 0; i < arr.length; i++) {
     sum = sum + arr[i] ;  
}

 console.log(sum);


 const numbers = [3, 7, 2, 9, 5];
// Find the largest number using a for loop
let largest = numbers[0]
for( let i = 1; i < numbers.length ; i++) {
    if(numbers[i] > largest) {
        largest = numbers[i]
    }
}

console.log("Largest Number:", largest);


const word = "programming";
// Count number of vowels (a, e, i, o, u) using for loop
let count = 0;
const vowels = "aeiou"

for (let i = 0; i < word.length; i++) {
   if (vowels.includes(word[i])) {
    count ++
   }
    
}

console.log(count);

const user = { username: "john_doe", password: "1234" };
// Check if "password" key exists using for...in
let hasPassword = false
for (const key in user) {
  if (key === "password") {
    hasPassword = true
    break
  }
   
}
console.log(hasPassword ? "Password key exists" : "Password key does not exist");


const students = {
  alice: { age: 20, grade: "A" },
  bob: { age: 22, grade: "B" }
};

// Print each student's name, age, and grade
for (const student in students) {
   console.log(student, students[student].age, students[student].grade );
   
}

// shopping Cart Calculation
const cart = [
  { name: "Laptop", price: 50000, qty: 1 },
  { name: "Headphones", price: 2000, qty: 2 },
  { name: "Mouse", price: 1000, qty: 1 }
];

let total = 0
for (const item of cart) {
    total += item.price * item.qty
}
console.log("total bill", total );


// Check User Permissions

const userRoles = { admin: true, editor: false, viewer: true };
for (const role in userRoles) {
    if (userRoles[role]) {
        console.log(`user has ${role} access`);
        
    }
}



// transformation
const arr2 = [4, 5, 7, 9, 3, 6, 8];
for (let i = 0; i < arr2.length; i++) {
  const element = arr2[i];
//   console.log(element);
}

// filtering
const array =[60 , 69 ,50, 40, 46, 20]
const even = [];
for (let index = 0; index < array.length; index++) {
  if (array[index] % 2 === 0) {
    even.push(array[index]);
  }
}
// console.log(even);

// aggregation
const arr1 = [100,200,300]
let sums = 0
for(i = 0; i < arr1.length; i++) {
    sums += arr[i]
}
console.log(sums);







// Performance Optimization

// Industry Best Practices for Loops:

// Use for...of for arrays, for...in for objects, .map(), .filter(), .reduce() for functional programming.

// Break early when you find the result (break).

// Avoid nested loops if possible (use maps/sets for O(1) lookups).

// Keep loops small & optimize for large datasets (pagination, lazy loading).


