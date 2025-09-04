// for loop

for (let i = 0; i < 20; i++) {
  //   console.log(i);
}

const numbers = [12, 45, 7, 89, 34];
// 👉 Find the largest number
let largest = [0];

for (const num of numbers) {
  if (num > largest) {
    largest = num;
  }
}
console.log(largest);

const num = [1, 2, 3, 4, 5, 6, 7, 8];
// 👉 Count how many even numbers are there

let even = [];

for (const n of num) {
  if (n % 2 === 0) {
    even.push(n);
  }
}
console.log(even);

const n = [20, 55, 75, 10, 99, 40];
// 👉 Make a new array with only numbers greater than 50

let newArray = []

for (const num of n) {
    if ( num > 50 ) {
        newArray.push(num)
    }
}
console.log(newArray);




