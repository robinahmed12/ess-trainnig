// while loop
let i = 1;
while (i <= 10) {
  console.log(i);

  i++;
}

// do while loop

let score = 1;

do {
  console.log(score);
  score++;
} while (score <= 20);

// for loop
for (let i = 2; i < 10; i++) {
  console.log(i);
}

// for of
const colors = ["red", "green", "blue"];
for (const c of colors) {
  console.log(c);
}

// for in
const person = {
  name: "Robin",
  age: "18",
  location: "dk",
};
for (const p in person) {
  console.log(p, person[p]);
}

// array loop method

// 2.1 forEach()

let fruits = ["apple", "banana", "mango"];
fruits.forEach((fruit) => console.log(fruit));

// 2.2 map()

let nums = [1, 2, 3];
let squared = nums.map((n) => n * n);
console.log(squared); // [1,4,9]

// 2.3 filter()

let numbers = [5, 10, 15, 20];
let greaterThan10 = numbers.filter((n) => n > 10);
console.log(greaterThan10); // [15,20]

// 2.4 reduce()

let arr = [1, 2, 3, 4];
let sum = arr.reduce((acc, n) => acc + n, 0);
console.log(sum); // 10

// 2.5 some()

let ages = [12, 18, 21];
console.log(ages.some((age) => age >= 18)); // true

// 2.6 every()

let marks = [60, 70, 80];
console.log(marks.every((m) => m >= 50)); // true

// 2.7 find()

let nums2 = [3, 6, 8, 10];
console.log(nums2.find((n) => n > 5)); // 6

// 2.8 findIndex()

console.log(nums2.findIndex((n) => n > 5)); // 1

let total = 0

while (i => 10 ) {
  console.log(i);
  
}



