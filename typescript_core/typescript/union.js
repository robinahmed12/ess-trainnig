// exercise 01
// function
var newAdmin = {
    id: 56,
    name: "hanry",
    role: "admin",
    permission: ["update", "delete"],
};
console.log(newAdmin);
// exercise 2
function calculateSum(input) {
    if (Array.isArray(input)) {
        return input.reduce(function (acc, curr) { return acc + curr; }, 0);
    }
    return input;
}
var sum = calculateSum([6, 7, 8, 9]);
console.log(sum);
var cart = [
    { name: "shoes", price: 200 },
    { name: "shirt", price: 500 },
    { name: "pant", price: 700 },
];
function cartTotal(items) {
    return items.reduce(function (acc, item) { return acc + item.price; }, 0);
}
var total = cartTotal(cart);
console.log(total);
//
function checkNUmber(value) {
    if (isNaN(value) || !isFinite(value)) {
        return false;
    }
    return value % 2 === 0 ? "even" : "odd";
}
var numbers = [2, 3, 4, 6, NaN, Infinity, 42, 7];
numbers.forEach(function (num) {
    var result = checkNUmber(num);
    if (result === false) {
        console.log("".concat(num, " is not a valid number"));
    }
    else {
        console.log("".concat(num, " is ").concat(result));
    }
});
