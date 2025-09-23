"use strict";
// typeof guard
Object.defineProperty(exports, "__esModule", { value: true });
function doubleValue(input) {
    if (typeof input === "string") {
        return input + input;
    }
    else {
        return input * 2;
    }
}
// console.log(doubleValue("double this string"));
// console.log(doubleValue(40));
function formatValue(value) {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    else {
        return value.toFixed(2);
    }
}
// console.log(formatValue("robin"));
function toggleFeature(flag) {
    if (typeof flag === "boolean") {
        return !flag;
    }
    else {
        return flag === "no" ? false : true;
    }
}
// console.log(toggleFeature(false));
// console.log(toggleFeature(true));
function describe(input) {
    if (typeof input === "object") {
        if (Array.isArray(input)) {
            return `array with ${input.length} items`;
        }
        else {
            return " generic object";
        }
    }
}
console.log(describe({ id: "my name" }));
console.log(describe([1, 3]));
function sanitize(input) {
    if (typeof input === "string") {
        return input.trim();
    }
    else if (typeof input === "number") {
        return Math.round(input);
    }
    else {
        return input ? "yes" : "no";
    }
}
function getInfo(person) {
    if ("accessLevel" in person) {
        console.log("Admin Access:", person.accessLevel);
    }
    else {
        console.log("User Email:", person.email);
    }
}
const admin = { role: "admin", accessLevel: 10 };
const user = { role: "user", email: "ro@bin.com" };
function calculatorArea(shape) {
    if ("radius" in shape) {
        return Math.PI * shape.radius;
    }
    else {
        return shape.width * shape.height;
    }
}
const circle1 = { radius: 40 };
const rectangle1 = { width: 10, height: 20 };
function validate(field) {
    if ("value" in field) {
        return field.value.trim().length > 0;
    }
    else {
        return field.checked;
    }
}
const field1 = { value: "Robin" };
const checked1 = { checked: true };
console.log(validate(field1));
console.log(validate(checked1));
function handleResponse(response) {
    if ("data" in response) {
        console.log("success:", response.data);
    }
    else {
        console.log("Error:", response.error);
    }
}
const success1 = { data: "data loaded" };
console.log(success1);
const error1 = { error: "" };
console.log(error1);
// instanceOf
class Animal {
    speak() {
        console.log("Animal sound");
    }
}
class Dog extends Animal {
    bark() {
        console.log("Woof!");
    }
}
function handlePet(pet) {
    if (pet instanceof Dog) {
        pet.bark();
    }
    else {
        pet.speak();
    }
}
const dog1 = new Dog();
dog1.bark();
handlePet(dog1);
function printLength(value) {
    if (value instanceof Array) {
        console.log("Array length:", value.length);
    }
    else {
        console.log("String length:", value.length);
    }
}
printLength("Hello");
printLength(["a", "b", "c"]);
// function greet(user?: { name: string }) {
//   if (user) {
//     console.log(`Hello, ${user.name}`);
//   } else {
//     console.log("hello , guest");
//   }
// }
//# sourceMappingURL=type_narrowing.js.map