"use strict";
//  class decorators
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
function Logger(constructor) {
    console.log(`📢 Logger: Class created -> ${constructor.name}`);
}
let MyComponent = class MyComponent {
    constructor() {
        console.log("✅ MyComponent instance created!");
    }
};
MyComponent = __decorate([
    Logger,
    __metadata("design:paramtypes", [])
], MyComponent);
// Create an instance
const comp = new MyComponent();
// console.log(comp);
function Logger2(constructor) {
    console.log(`📢 Logger: Class "${constructor.name}" has been defined.`);
}
let Person = class Person {
    constructor(name) {
        this.name = name;
    }
};
Person = __decorate([
    Logger2,
    __metadata("design:paramtypes", [String])
], Person);
const p = new Person("Robin");
// console.log(p);
function Timestamped(constructor) {
    constructor.prototype.cratedAt = new Date();
}
let Document = class Document {
};
Document = __decorate([
    Timestamped
], Document);
const doc = new Document();
console.log("created at :", doc.createdAt);
//
function myDecorators(target) {
    console.log("hello! a class was created");
    console.log("the class name isd:", target.name);
}
let Dog = class Dog {
    constructor(name) {
        this.name = name;
    }
};
Dog = __decorate([
    myDecorators,
    __metadata("design:paramtypes", [String])
], Dog);
const myDog = new Dog("Buddy");
console.log(myDog);
//
function AddBarkMethod(target) {
    target.prototype.bark = function () {
        return `${this.name} says woof`;
    };
}
let Cat = class Cat {
    constructor(name) {
        this.name = name;
    }
};
Cat = __decorate([
    AddBarkMethod,
    __metadata("design:paramtypes", [String])
], Cat);
const myCat = new Cat("whiskers");
console.log(myCat.bark());
//
function AddGreetings(greeting) {
    return function (target) {
        target.prototype.greet = function () {
            return `${greeting}! My name is ${this.name}`;
        };
    };
}
let Person1 = class Person1 {
    constructor(name) {
        this.name = name;
    }
};
Person1 = __decorate([
    AddGreetings("hello"),
    __metadata("design:paramtypes", [String])
], Person1);
const john = new Person1("john");
// console.log((john as any).greet());
// property decorator
function propertyDecorator(target, propertyName) {
    console.log(`found property called: ${propertyName}`);
    console.log(`it belongs to the class: ${target.constructor.name}`);
}
class Student {
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
}
__decorate([
    propertyDecorator,
    __metadata("design:type", String)
], Student.prototype, "name", void 0);
__decorate([
    propertyDecorator,
    __metadata("design:type", Number)
], Student.prototype, "age", void 0);
const student = new Student("John", 34, "A");
// console.log(student);
function DetailedPropertyDecorator(target, propertyName) {
    console.log("Property Decorator Details:");
    console.log("  - Property name:", propertyName);
    console.log("  - Target (class prototype):", target);
    console.log("  - Target constructor name:", target.constructor.name);
    console.log("---");
}
class Car {
    constructor(brand, year) {
        this.brand = "Toyota";
        if (brand)
            this.brand = brand;
        if (year)
            this.year = year;
    }
}
__decorate([
    DetailedPropertyDecorator,
    __metadata("design:type", String)
], Car.prototype, "brand", void 0);
__decorate([
    DetailedPropertyDecorator,
    __metadata("design:type", Object)
], Car.prototype, "year", void 0);
const car = new Car("Honda", 2022);
console.log(car);
function LogProperty(target, propertyName) {
    let value;
    Object.defineProperty(target, propertyName, {
        get: function () {
            console.log(`👀 Someone is reading ${propertyName}: ${value}`);
            return value;
        },
        set: function (newValue) {
            console.log(`✏️ Someone is writing ${propertyName}: ${newValue}`);
            value = newValue;
        },
        enumerable: true,
        configurable: true,
    });
}
class BankAccount {
    constructor(name, balance) {
        this.name = name;
        this.balance = balance;
    }
    deposit(amount) {
        this.balance = this.balance + amount;
    }
}
__decorate([
    LogProperty,
    __metadata("design:type", Number)
], BankAccount.prototype, "balance", void 0);
const account = new BankAccount("John's Account", 100);
console.log("Current balance:", account.balance);
account.deposit(50);
console.log("Final balance:", account.balance);
//# sourceMappingURL=decorators.js.map