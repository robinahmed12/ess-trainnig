const prices = [100, 200, 300];
const discounted = prices.map((p) => p * 0.9);
console.log(discounted);

// Filter Adults (>=18 years old)

const ages = [12, 18, 25, 40];
const adults = ages.filter((age) => age >= 18);
console.log(adults);

// Count Vowels in a String
const countVowels = (str) => str.match(/[aeiou]/gi)?.length || 0;

console.log(countVowels("hello world"));

// Given an array of items with prices, return total price.
const cart = [{ price: 100 }, { price: 200 }, { price: 50 }];
const total = cart.reduce((sum, item) => sum + item.price, 0);
console.log(total);

// . Group Words by First Letter
const words = ["apple", "banana", "apricot", "blueberry"];

const grouped = words.reduced((acc, word) => {
  const firstLetter = word[0];
  acc[firstLetter] = acc[firstLetter] ? [...acc[firstLetter], word] : [word];
  return acc;
}, {});
console.log(grouped);
