var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function identity(value) {
    return value;
}
// console.log(identity("robin"));
var num = identity(42);
var str = identity("robin");
var bool = identity(true);
//
function firstElement(arr) {
    return arr.length > 0 ? arr[0] : undefined;
}
var numbers = [1, 2, 34, 4];
var first = firstElement(numbers);
console.log(first);
//
function getRandomElement(arr) {
    var randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}
console.log(getRandomElement([1, 2, 4]));
function mergeObj(obj, obj2) {
    return __assign(__assign({}, obj), obj2);
}
var user = mergeObj({ name: "Robin" }, { age: 22 });
console.log(user);
