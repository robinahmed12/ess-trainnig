//

type Item = { name: string; price: number };

// Overloads
function addToCart(item: Item): void;
function addToCart(items: Item[]): void;

function addToCart(input: Item | Item[]): void {
  if (Array.isArray(input)) {
    console.log(
      "Added multiple items:",
      input.map((i) => i.name)
    );
  } else {
    console.log("Added single item:", input.name);
  }
}

addToCart({ name: "Laptop", price: 1000 });
addToCart([
  { name: "Phone", price: 500 },
  { name: "Headset", price: 100 },
]);

//

function log(message: string): void;
function log(data: object): void;

function log(input: string | object): void {
  if (typeof input === "string") {
    console.log(`info ${input}`);
  } else {
    console.log("data", JSON.stringify(input));
  }
}

log("server started");
log({ user: "Robin", role: "admin" });

//

type User2 = {
  id: number;
  name: string;
};

function findUser(id: number): User2;
function findUser(name: string): User2[];

function findUser(param: number | string): User2 | User2[] {
  if (typeof param === "number") {
    return { id: param, name: "Robin" };
  } else {
    return [
      { id: 1, name: param },
      { id: 2, name: param },
    ];
  }
}
let single = findUser(1);
console.log(single);
let many = findUser("Alice");
console.log(many);

//

type User = { id: number; name: string };
type Product = { id: number; price: number };

// overload signature
function fetchData(type: "user"): User;
function fetchData(type: "product"): Product;

function fetchData(type: "user" | "product"): User | Product {
  if (type === "user") {
    return { id: 1, name: "Robin" };
  }

  return { id: 1, price: 200 };
}

let user = fetchData("user");
console.log(user);
let product = fetchData("product");
console.log(product);

//

function greet(name: string): string;
function greet(names: string[]): string[];

function greet(input: string | string[]): string | string[] {
  if (typeof input === "string") {
    return `hello, ${input}`;
  } else {
    return input.map((n) => `hello , ${n}`);
  }
}

console.log(greet("Robin"));
console.log(greet(["h", "l"]));

export {};
