// typeof guard

function doubleValue(input: string | number) {
  if (typeof input === "string") {
    return input + input;
  } else {
    return input * 2;
  }
}

// console.log(doubleValue("double this string"));
// console.log(doubleValue(40));

function formatValue(value: string | number) {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else {
    return value.toFixed(2);
  }
}
// console.log(formatValue("robin"));

function toggleFeature(flag: boolean | string) {
  if (typeof flag === "boolean") {
    return !flag;
  } else {
    return flag === "no" ? false : true;
  }
}

// console.log(toggleFeature(false));
// console.log(toggleFeature(true));

function describe(input: object | string[]) {
  if (typeof input === "object") {
    if (Array.isArray(input)) {
      return `array with ${input.length} items`;
    } else {
      return " generic object";
    }
  }
}

console.log(describe({ id: "my name" }));
console.log(describe([1, 3]));

function sanitize(input: string | number | boolean) {
  if (typeof input === "string") {
    return input.trim();
  } else if (typeof input === "number") {
    return Math.round(input);
  } else {
    return input ? "yes" : "no";
  }
}

// console.log(sanitize("str"));
// console.log(sanitize(44));
// console.log(sanitize(false));

// in operator

type Admin = { role: "admin"; accessLevel: number };
type User = { role: "user"; email: string };

function getInfo(person: Admin | User) {
  if ("accessLevel" in person) {
    console.log("Admin Access:", person.accessLevel);
  } else {
    console.log("User Email:", person.email);
  }
}
const admin: Admin = { role: "admin", accessLevel: 10 };
const user: User = { role: "user", email: "ro@bin.com" };
// getInfo(admin)
// getInfo(user)

type Circle = { radius: number };
type Rectangle = { width: number; height: number };

function calculatorArea(shape: Circle | Rectangle) {
  if ("radius" in shape) {
    return Math.PI * shape.radius;
  } else {
    return shape.width * shape.height;
  }
}
const circle1: Circle = { radius: 40 };
const rectangle1: Rectangle = { width: 10, height: 20 };
// console.log(calculatorArea(circle1));
// console.log(calculatorArea(rectangle1));

type TextField = { value: string };
type CheckboxField = { checked: boolean };

function validate(field: TextField | CheckboxField) {
  if ("value" in field) {
    return field.value.trim().length > 0;
  } else {
    return field.checked;
  }
}

const field1: TextField = { value: "Robin" };
const checked1: CheckboxField = { checked: true };
console.log(validate(field1));
console.log(validate(checked1));

type SuccessResponse = { data: string };
type ErrorResponse = { error: string };
function handleResponse(response: SuccessResponse | ErrorResponse) {
  if ("data" in response) {
    console.log("success:", response.data);
  } else {
    console.log("Error:", response.error);
  }
}

const success1: SuccessResponse = { data: "data loaded" };
console.log(success1);
const error1: ErrorResponse = { error: "" };
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

function handlePet(pet: Animal) {
  if (pet instanceof Dog) {
    pet.bark();
  } else {
    pet.speak();
  }
}
const dog1 = new Dog();
dog1.bark();
handlePet(dog1);

function printLength(value: string | string[]) {
  if (value instanceof Array) {
    console.log("Array length:", value.length);
  } else {
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
