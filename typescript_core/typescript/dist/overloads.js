"use strict";
//
Object.defineProperty(exports, "__esModule", { value: true });
function addToCart(input) {
    if (Array.isArray(input)) {
        console.log("Added multiple items:", input.map((i) => i.name));
    }
    else {
        console.log("Added single item:", input.name);
    }
}
addToCart({ name: "Laptop", price: 1000 });
addToCart([
    { name: "Phone", price: 500 },
    { name: "Headset", price: 100 },
]);
function log(input) {
    if (typeof input === "string") {
        console.log(`info ${input}`);
    }
    else {
        console.log("data", JSON.stringify(input));
    }
}
log("server started");
log({ user: "Robin", role: "admin" });
function findUser(param) {
    if (typeof param === "number") {
        return { id: param, name: "Robin" };
    }
    else {
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
function fetchData(type) {
    if (type === "user") {
        return { id: 1, name: "Robin" };
    }
    return { id: 1, price: 200 };
}
let user = fetchData("user");
console.log(user);
let product = fetchData("product");
console.log(product);
function greet(input) {
    if (typeof input === "string") {
        return `hello, ${input}`;
    }
    else {
        return input.map((n) => `hello , ${n}`);
    }
}
console.log(greet("Robin"));
console.log(greet(["h", "l"]));
//# sourceMappingURL=overloads.js.map