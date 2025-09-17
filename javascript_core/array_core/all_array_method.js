//1. Extracting & Modifying

// slice(start, end) – Copy part of array

// splice(start, deleteCount, ...items) – Remove/insert

// concat() – Merge arrays

const person = ["sohan", "rohan", "roni", "rakib"];
const age = [20, 25, 40, 30];
// console.log(person.slice(0 , 2));
// console.log(person.splice(2 , 1 , "rafi"));
const newArr = person.concat(age);
// console.log(newArr);

// 2. Transforming

// map() – Returns new array by transforming each element

// filter() – Returns new array with elements passing condition

// reduce() – Reduces to single value

// forEach() – Loops but returns nothing

const marks = [90, 70, 85, 56, 95, 39];

const multiply = marks.map((m) => m * 3);
// console.log(multiply);
const even = marks.filter((m) => m % 2 === 0);
// console.log(even);
const sum = marks.reduce((acc, n) => acc + n, 0);
// console.log(sum);
marks.forEach((m) => console.log(m));

// 3. Sorting & Reversing

// sort() – Sorts array (lexical by default)

// reverse() – Reverses array

const fruits = ["mango", "orange", "banana", "apple"];
const digit = [2, 5, 6, 7, 8, 8, 90];
const sorted = digit.sort((a, b) => a - b);
// console.log(sorted);
fruits.reverse();
// console.log(fruits);

//4. Joining & Splitting

// join(separator) – Convert array to string

// toString() – Convert to string

const animal = ["dog", "cat", "cow"];
// console.log(animal.join(" "));
// console.log(animal.toString());

// few more methods

// find() – Returns first element matching condition

// findIndex() – Returns index of first matching

// every() – All elements pass test?

// some() – At least one pass test?

// flat() – Flattens nested arrays

// fill(value,start,end) – Fills part of array

const num = [1, 2, 3, 4];
// console.log(num.find( n => n > 3));
// console.log(num.findIndex( n => n > 2));
// console.log(num.some( n => n > 5)); false

// basic Method

// Array length
// Array toString()
// Array at()
// Array join()
let fruit = ["apple", "banana", "mango"];
// console.log(fruits.join(" | "));

// Array pop()
const myName = ["abul", "kabul", "moina", "tia"]
myName.push("a")
myName.unshift("b")
console.log(myName);





// Array push()
// Array shift()
// Array unshift()
// Array delete()
// Array concat()
const a = [4, 5, 6];
const b = [6, 7, 8];
console.log(a.concat(b));

// Array copyWithin()
// Array flat()
const arr = [4, [5, 7, 8], 89, [6, 8, 9]];
// console.log(arr.flat());

// Array slice()
const score = [20, 60, 80];
// console.log(score.slice(0, 2));

// Array splice()
const mark = [6, 8, 9, 10, 15];
// console.log(mark.splice(0, 3, 3));

// Array toSpliced()

// iteration method

// Array forEach
const myNum = [6, 8, 9, 0, 7, 9, 12];
// myNum.forEach((n) => console.log(n));

// Array map()
const myNumber = [9, 7, 5, 68];
const n = myNumber.map((n) => n);
// console.log(n);

// Array flatMap()
// Array filter()
const list = [6, 8, 10, 50, 70, 100];
const evenNum = list.filter((n) => n % 2 === 0);
// console.log(evenNum);

// Array reduce()
const yourNum = [6, 8, 10, 7];
const mySum = yourNum.reduce((sum, num) => sum + num, 0);
// console.log(mySum);

// Array reduceRight()
// Array every()
const everyNUm = [6, 8, 10 ,12 , 10]
const allPass = everyNUm.every( n => n % 2 === 0)
// console.log(allPass);

// Array some()
const hero = ["superman", "batman", "ironman" ]
const h = hero.some(h => h.length ===  8)
// console.log(h);

// Array from()
// Array keys()
// Array entries()
const obj = {
    name : "hasan",
    number: "01716900294"
}
// console.log(Object.entries(obj));

// Array with()
// Array Spread (...)
const spRed = [6, 8, 10 ,14, 19, 100]
const spRed1 = [10,15,19,200]
const allNUm  = [...spRed , ...spRed1]
console0.log(allNUm);

// Array Rest (...)

// search method
// Array indexOf()
// Array lastIndexOf()
// Array includes()
const fruitName = ["apple", "mango", "banana"];
// console.log(fruitName.includes("apple"));

// Array find()
const run = [100, 50, 60, 80];
// console.log(run.find((n) => n % 2 === 0));

// Array findIndex()
// Array findLast()
// Array findLastIndex()

// sort method

// Alphabetic Sort
// Array sort()
// Array reverse()
const myMoney = [500, 700, 500, 300];
// console.log(myMoney.reverse().join(" | "));

// Array toSorted()
// Array toReversed()
// Sorting Objects
// Numeric Sort
// Numeric Sort
// Random Sort
// Math.min()
// Math.max()
// Home made Min()
// Home made Max()
