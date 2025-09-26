"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let val = Math.random() > 0.5 ? 42 : "TS";
if (typeof val === "string") {
    console.log(val.toUpperCase());
}
else {
    console.log(val.toFixed(2));
}
function area(s) {
    switch (s.kind) {
        case "circle":
            return Math.PI * Math.pow(s.radius, 2);
        case "square":
            return s.size * s.size;
        default:
            const _exhaustive = s;
            return _exhaustive;
    }
}
// const c: Shape = { kind: "tringle", radius: 10 };
const s = { kind: "square", size: 5 };
const cfg = { apiKey: "abc123" };
cfg.apiKey = "gog";
// console.log(cfg);
var Role;
(function (Role) {
    Role[Role["User"] = 0] = "User";
    Role[Role["Admin"] = 1] = "Admin";
    Role[Role["SuperAdmin"] = 2] = "SuperAdmin";
})(Role || (Role = {}));
// console.log(Role.Admin);
// console.log(Role[2]);
var Mode;
(function (Mode) {
    Mode[Mode["Dev"] = 0] = "Dev";
    Mode["Prod"] = "prod";
})(Mode || (Mode = {}));
// console.log(Mode.Dev);
// console.log(Mode[0]);
function format(msg, prefix) {
    return (prefix !== null && prefix !== void 0 ? prefix : ">>>") + msg;
}
function combine(a, b) { return a + b; }
// console.log(combine(1, 2));
// console.log(combine("x", "y"));
// console.log(combine(1, "oops"));
function wrap(value) {
    return { value };
}
let a = wrap(123);
let b = wrap("hi");
let c = wrap(Math.random() > 0.5 ? 1 : "union");
// console.log(a.value, typeof a.value);
// console.log(b.value, typeof b.value);
// console.log(c.value);
function pluck(obj, key) {
    return obj[key];
}
const person = { id: 7, name: "Ada" };
// console.log(pluck(person, "name"));
// console.log(pluck(person, "age"));
function makePair(x, y) {
    return [x, y];
}
// console.log(makePair("a", "b"));
// console.log(makePair(1, 2));
// interface Dictionary {
//     [key: string]: string;
//     length: string;
// }
// const d: Dictionary = { length: "oops", count: 10 };
// console.log(d);
let t;
t = [1];
t = [2, "ok"];
// t = [];
// console.log(t);
function lengthOrZero(s) {
    // return s.length;
}
// console.log(lengthOrZero("hi"));
// console.log(lengthOrZero());
//# sourceMappingURL=test_01.js.map