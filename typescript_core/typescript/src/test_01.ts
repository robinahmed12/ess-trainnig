let val = Math.random() > 0.5 ? 42 : "TS";

if (typeof val === "string") {
  console.log(val.toUpperCase());
} else {
  console.log(val.toFixed(2));
}

// console.log(Math.random());

type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; size: number };

function area(s: Shape): number {
  switch (s.kind) {
    case "circle":
      return Math.PI * s.radius ** 2;
    case "square":
      return s.size * s.size;
    default:
      const _exhaustive: never = s;
      return _exhaustive;
  }
}


// const c: Shape = { kind: "tringle", radius: 10 };
const s: Shape = { kind: "square", size: 5 };

// console.log(area(c)); 
// console.log(area(s)); 

interface Config {
     apiKey: string;
}

const  cfg: Config = { apiKey: "abc123" };
cfg.apiKey = "gog";
// console.log(cfg);

enum Role { User, Admin, SuperAdmin }
// console.log(Role.Admin);
// console.log(Role[2]);

enum Mode { Dev, Prod = "prod" }
// console.log(Mode.Dev);
// console.log(Mode[0]);

function format(msg?: string, prefix?: string) {
    return (prefix ?? ">>>") + msg;
}
// console.log(format("hello"));
// console.log(format("world"));
// console.log(format("oops"));


function combine(a: number, b: number): number;
function combine(a: string, b: string): string;
function combine(a: any, b: any) { return a + b; }

// console.log(combine(1, 2));
// console.log(combine("x", "y"));
// console.log(combine(1, "oops"));

function wrap<T>(value: T) {
    return { value };
}

let a = wrap(123);
let b = wrap("hi");
let c = wrap(Math.random() > 0.5 ? 1 : "union");

// console.log(a.value, typeof a.value);
// console.log(b.value, typeof b.value);
// console.log(c.value);

function pluck<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

const person = { id: 7, name: "Ada" };
// console.log(pluck(person, "name"));
// console.log(pluck(person, "age"));

function makePair<T = string>(x: T, y: T): [T, T] {
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

let t: [number, string?];
t = [1];
t = [2, "ok"];
// t = [];
// console.log(t);

function lengthOrZero(s?: string) {
    // return s.length;
}

// console.log(lengthOrZero("hi"));
// console.log(lengthOrZero());



