// primitive type 7
const name = "robin"
const age = 25
const married = false
let a;
console.log(a , "undefined");
let x = null

// non_primitive 

const myDetails = {
    jobTitle: "jr. developer",
    location: "Dhaka",
    email: "r@bin,com"
}


const product = ["ball", "ball" , "stadium" ]
console.log(product[4]);



// 1. Convert to Number
// Methods:

// Number(value) → Converts anything to a number.

// parseInt(value) → Converts to integer.

// parseFloat(value) → Converts to floating-point number.

// Unary +value → Quick conversion to number.

Examples:
Number("123");      // 123
Number("12.5");     // 12.5
Number("abc");      // NaN
parseInt("42px");   // 42
parseFloat("3.14"); // 3.14
+"99";              // 99

// 2. Convert to String
// Methods:

// String(value) → Converts to string.

// value.toString() → Converts to string (except null & undefined).

Examples:
String(123);        // "123"
String(true);       // "true"
(123).toString();   // "123"

// 3. Convert to Boolean
// Methods:

// Boolean(value) → Converts to true or false.

// !!value → Double NOT operator (quick conversion).

Examples:
Boolean(0);       // false
Boolean(1);       // true
Boolean("");      // false
Boolean("Hi");    // true
!!"Hello";        // true

// 4. Convert to Object / JSON
// Methods:

// Object(value) → Wraps value in an object.

// JSON.stringify(obj) → Converts object to JSON string.

// JSON.parse(str) → Converts JSON string back to object.

Examples:
Object(123); // Number {123}
JSON.stringify({name: "John"}); // '{"name":"John"}'
JSON.parse('{"name":"John"}');  // {name: "John"}

// 5. Automatic (Type Coercion)

// JavaScript sometimes converts automatically:

"5" + 2;    // "52"  (String + Number → String)
"5" - 2;    // 3     (String - Number → Number)
true + 1;   // 2     (Boolean → Number)

