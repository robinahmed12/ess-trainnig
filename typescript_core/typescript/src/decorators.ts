//  class decorators

function Logger(constructor: Function) {
  console.log(`📢 Logger: Class created -> ${constructor.name}`);
}

@Logger
class MyComponent {
  constructor() {
    console.log("✅ MyComponent instance created!");
  }
}

// Create an instance
const comp = new MyComponent();
// console.log(comp);

function Logger2(constructor: Function) {
  console.log(`📢 Logger: Class "${constructor.name}" has been defined.`);
}

@Logger2
class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const p = new Person("Robin");
// console.log(p);

function Timestamped(constructor: Function) {
  constructor.prototype.cratedAt = new Date();
}

@Timestamped
class Document {}
const doc = new Document();
console.log("created at :", (doc as any).createdAt);

//
function myDecorators(target: any) {
  console.log("hello! a class was created");
  console.log("the class name isd:", target.name);
}
@myDecorators
class Dog {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

const myDog = new Dog("Buddy");
console.log(myDog);

//
function AddBarkMethod(target: any) {
  target.prototype.bark = function () {
    return `${this.name} says woof`;
  };
}
@AddBarkMethod
class Cat {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
const myCat = new Cat("whiskers");
console.log((myCat as any).bark());

//

function AddGreetings(greeting: string) {
  return function (target: any) {
    target.prototype.greet = function () {
      return `${greeting}! My name is ${this.name}`;
    };
  };
}

@AddGreetings("hello")
class Person1 {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

const john = new Person1("john");
// console.log((john as any).greet());

// property decorator

function propertyDecorator(target: any, propertyName: string) {
  console.log(`found property called: ${propertyName}`);
  console.log(`it belongs to the class: ${target.constructor.name}`);
}

class Student {
  @propertyDecorator
  name: string;
  @propertyDecorator
  age: number;
  grade: string;
  constructor(name: string, age: number, grade: string) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }
}

const student = new Student("John", 34, "A");
// console.log(student);

function DetailedPropertyDecorator(target: any, propertyName: string) {
  console.log("Property Decorator Details:");
  console.log("  - Property name:", propertyName);
  console.log("  - Target (class prototype):", target);
  console.log("  - Target constructor name:", target.constructor.name);
  console.log("---");
}

class Car {
  @DetailedPropertyDecorator
  brand: string = "Toyota";
  @DetailedPropertyDecorator
  year: number | undefined;

  constructor(brand?: string, year?: number) {
    if (brand) this.brand = brand;
    if (year) this.year = year;
  }
}

const car = new Car("Honda", 2022);
console.log(car);

function LogProperty(target: any, propertyName: string) {
  let value: any;
  Object.defineProperty(target, propertyName, {
    get: function () {
      console.log(` Someone is reading ${propertyName}: ${value}`);
      return value;
    },
    set: function (newValue: any) {
      console.log(` Someone is writing ${propertyName}: ${newValue}`);
      value = newValue;
    },
    enumerable: true,
    configurable: true,
  });
}

class BankAccount {
  @LogProperty
  balance: number;

  name: string; // No decorator - won't be logged

  constructor(name: string, balance: number) {
    this.name = name;
    this.balance = balance;
  }

  deposit(amount: number) {
    this.balance = this.balance + amount;
  }
}
const account = new BankAccount("John's Account", 100);
console.log("Current balance:", account.balance);
account.deposit(50);
console.log("Final balance:", account.balance);

//
function LogMethod(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  const original = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`Calling ${methodName} with`, args);
    return original.apply(this, args);
  };
}
class Calculator {
  @LogMethod
  add(a: number, b: number) {
    return a + b;
  }
}

const calc = new Calculator();
console.log(calc.add(3, 6));

// @Delay – Delays method execution

function Delay(ms: number) {
  return function (
    target: any,
    methodName: string,
    descriptor: PropertyDescriptor
  ) {
    const original = descriptor.value;
    descriptor.value = function (...arg: any[]) {
      console.log(`Delaying ${methodName} by ${ms}ms`);
      setTimeout(() => original.apply(this, arg), ms);
    };
  };
}

