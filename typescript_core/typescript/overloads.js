"use strict";
//
Object.defineProperty(exports, "__esModule", { value: true });
function log(input) {
    if (typeof input === "string") {
        console.log("info ".concat(input));
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
var single = findUser(1);
console.log(single);
var many = findUser("Alice");
console.log(many);
function fetchData(type) {
    if (type === "user") {
        return { id: 1, name: "Robin" };
    }
    return { id: 1, price: 200 };
}
var user = fetchData("user");
console.log(user);
var product = fetchData("product");
console.log(product);
function greet(input) {
    if (typeof input === "string") {
        return "hello, ".concat(input);
    }
    else {
        return input.map(function (n) { return "hello , ".concat(n); });
    }
}
console.log(greet("Robin"));
console.log(greet(["h", "l"]));
