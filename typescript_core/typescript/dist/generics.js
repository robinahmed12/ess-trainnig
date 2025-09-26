"use strict";
// generics with function
Object.defineProperty(exports, "__esModule", { value: true });
function identity(value) {
    return value;
}
// console.log(identity("robin"));
const num = identity(42);
const str = identity("robin");
const bool = identity(true);
//
function firstElement(arr) {
    return arr.length > 0 ? arr[0] : undefined;
}
const number = [1, 2, 34, 4];
const first = firstElement(number);
console.log(first);
//
// function getRandomElement<T>(arr: T[]): T {
//   const randomIndex = Math.floor(Math.random() * arr.length);
//   return arr[randomIndex];
// }
// console.log(getRandomElement([1, 2, 4]));
//
function mergeObj(obj, obj2) {
    return Object.assign(Object.assign({}, obj), obj2);
}
const user = mergeObj({ name: "Robin" }, { age: 22 });
console.log(user);
const userResponse = {
    data: { name: "Robin", age: 22 },
    status: 200,
};
const productResponse = {
    data: { id: 1001, price: 500 },
    status: 200,
};
const scoreBoard = {
    Robin: 50,
    Alice: 80,
};
const userRole = {
    Robin: "Admin",
    Shawn: "User",
};
const usersPage = {
    items: [
        { id: 1, name: "Robin" },
        { id: 2, name: "henry" },
    ],
    total: 20,
    page: 10,
    pageSize: 40,
};
const productPage = {
    items: [
        { id: 3, price: 300 },
        { id: 4, price: 800 },
    ],
    total: 300,
    page: 40,
    pageSize: 30,
};
function createdRepository() {
    const items = [];
    return {
        add(item) {
            items.push(item);
        },
        getAll() {
            return items;
        },
    };
}
const userRepo = createdRepository();
userRepo.add({ id: 1, name: "Robin" });
userRepo.add({ id: 2, name: "shawon" });
console.log(userRepo.getAll());
//
function getLength(item) {
    return item.length;
}
getLength("hello");
//# sourceMappingURL=generics.js.map