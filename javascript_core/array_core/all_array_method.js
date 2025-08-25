//1. Extracting & Modifying

// slice(start, end) – Copy part of array

// splice(start, deleteCount, ...items) – Remove/insert

// concat() – Merge arrays

const person = ["sohan", "rohan", "roni", "rakib"]
const age = [20 , 25 , 40 , 30]
console.log(person.slice(0 , 2));
console.log(person.splice(2 , 1 , "rafi"));
const newArr = person.concat(age)
// console.log(newArr);


// 2. Transforming

// map() – Returns new array by transforming each element

// filter() – Returns new array with elements passing condition

// reduce() – Reduces to single value

// forEach() – Loops but returns nothing


const marks = [90 , 70, 85, 56, 95, 39]

const multiply = marks.map( m => m*3)
console.log(multiply);
const even = marks.filter( m => m % 2 === 0)
console.log(even);
const sum = marks.reduce((acc , n) => acc + n , 0)
console.log(sum);
marks.forEach(m => console.log(m))


// 3. Sorting & Reversing

// sort() – Sorts array (lexical by default)

// reverse() – Reverses array

const fruits = ["mango",  "orange", "banana" , "apple"]
const digit = [2,5,6,7,8,8,90]
const sorted = digit.sort( (a,b)=> a - b)
console.log(sorted);
fruits.reverse()
console.log(fruits);


//4. Joining & Splitting

// join(separator) – Convert array to string

// toString() – Convert to string

const animal = ["dog", "cat", "cow"]
console.log(animal.join(" "));
console.log(animal.toString());

// few more methods

// find() – Returns first element matching condition

// findIndex() – Returns index of first matching

// every() – All elements pass test?

// some() – At least one pass test?

// flat() – Flattens nested arrays

// fill(value,start,end) – Fills part of array

const num = [1 , 2 , 3 , 4]
console.log(num.find( n => n > 3));
console.log(num.findIndex( n => n > 2));
// console.log(num.some( n => n > 5)); false

















