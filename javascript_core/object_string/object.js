// Accessing & Modifying Properties
const products = { name: "Laptop", price: 100 };
// console.log(products.name);
// console.log(products["price"]);

// products.price = 1200
// delete  products.price
const { name, price } = products;
console.log(name, price);

// Object.keys(), Object.values(), Object.entries()

console.log(Object.keys(products));
console.log(Object.values(products));
console.log(Object.entries(products));

// spread and rest operator

const quantity = {
  apple: 5,
  mango: 10,
  orange: 50,
};
const jackFruit = 30;
const addFruit = { ...quantity, jackFruit };
console.log(addFruit);

// Object.freeze() & Object.seal()

// freeze() → Prevents changes

// seal() → Allows changes to existing properties, but not add/remove

const favList = { sport: "cricket" };
Object.freeze(favList);
favList.sport = "football";
console.log(favList);

// "this" Keyword

const person = {
  name: "robin",
  greet() {
    console.log("hi" + this.name);
  },
};
person.greet()

// Why Companies Use Objects Everywhere

// Data from APIs is always JSON (JavaScript Object Notation).

// State management in apps (React, Angular, Vue) uses objects.

// Database queries return objects (MongoDB, Firebase).

// Configurable systems use key-value pairs.
