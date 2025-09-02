const my_array = [9, 7, 7, 9, 9];
const sum = my_array.reduce((acc, n) => acc + n, 0);
console.log(sum);

const even = my_array.find((n) => n % 2 === 0);
// console.log(even);

const odd = my_array.filter((n) => n % 2 !== 0);
// console.log(odd);

const value = my_array.some(n => n % 2 === 0)
// console.log(value);


const slice = my_array.slice(1 , 3)
// console.log(slice);

// entries

// The entries() method returns a new Array Iterator object containing key/value pairs for each array index.

const languages = ["Java", "C", "C++", "Python"];
let iterate = languages.entries()
for(let entry of iterate) {
    // console.log(entry);
    
}

// The every() method checks if all the array elements pass the given test function.

const numbers = [2, 4, 6, 7, 8];
const checkEven = numbers.every( n => n % 2 === 0)
console.log(checkEven);

// The fill() method returns an array by filling all elements with a specified value.

var prices = [651, 41, 4, 3, 6];

new_prices = prices.fill(5)
console.log(prices);
console.log(new_prices);

// The find() method returns the value of the first array element that satisfies the provided test function.
let num = [1, 3, 4, 9, 8];

function isEven (element){
    return element  % 2 == 0;
}
let evenNumber = num.find(isEven)
console.log(evenNumber);




