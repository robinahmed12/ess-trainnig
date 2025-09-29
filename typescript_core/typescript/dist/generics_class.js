"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Logger1 {
    log(data) {
        const timestamp = new Date().toISOString();
        console.log(`${timestamp} , ${JSON.stringify(data)}`);
    }
}
const stringLogger = new Logger1();
stringLogger.log("system started");
const userLogger = new Logger1();
userLogger.log({ id: 1, name: "Robin" });
// Generic Form State Manager
class FormState {
    constructor(initialState) {
        this.state = initialState;
    }
    update(key, value) {
        this.state[key] = value;
    }
    getState() {
        return this.state;
    }
}
const loginForm = new FormState({
    email: "",
    password: "",
});
loginForm.update("email", "ro@bin.com");
console.log(loginForm.getState());
class Dropdown {
    constructor() {
        this.options = [];
    }
    addOptions(option) {
        this.options.push(option);
    }
}
const stringDropdown = new Dropdown();
stringDropdown.addOptions({ label: "Apple", value: "apple" });
console.log(stringDropdown);
const numberDropdown = new Dropdown();
numberDropdown.addOptions({ label: "One", value: 1 });
console.log(numberDropdown);
class Logger {
    log(value) {
        console.log("Logging:", value);
    }
}
class DataManager {
    constructor() {
        this.items = [];
    }
    add(item) {
        this.items.push(item);
    }
    getAll() {
        return this.items;
    }
}
function printValues(items) {
    items.forEach((item) => console.log(`ID: ${item.id}, value: ${item.value}`));
}
const strManager = new DataManager();
strManager.add({ id: 1, value: "hello" });
const numManager = new DataManager();
numManager.add({ id: 2, value: 300 });
printValues(strManager.getAll());
printValues(numManager.getAll());
class soldList {
    constructor() {
        this.soldItem = [];
    }
    addSoldItem(item) {
        this.soldItem.push(item);
    }
    getSoldItems() {
        return this.soldItem;
    }
}
class strFoodList extends soldList {
    calculateRevenue() {
        return this.getSoldItems().reduce((total, item) => {
            const price = parseFloat(item.price);
            return total + (isNaN(price) ? 0 : price);
        }, 0);
    }
}
class NumericFoodSoldList extends soldList {
    calculateRevenue() {
        return this.getSoldItems().reduce((total, item) => total + item.price, 0);
    }
}
const stringSold = new strFoodList();
stringSold.addSoldItem({
    id: 1,
    name: "Burger",
    quality: "High",
    price: "150",
});
stringSold.addSoldItem({
    id: 2,
    name: "Pizza",
    quality: "Medium",
    price: "200",
});
console.log("String Revenue:", stringSold.calculateRevenue()); // 350
const numericSold = new NumericFoodSoldList();
numericSold.addSoldItem({ id: 1, name: 101, quality: 5, price: 120 });
numericSold.addSoldItem({ id: 2, name: 102, quality: 4, price: 180 });
console.log("Numeric Revenue:", numericSold.calculateRevenue());
//
var Department;
(function (Department) {
    Department["HR"] = "HR";
    Department["Engineering"] = "Engineering";
    Department["Marketing"] = "Marketing";
})(Department || (Department = {}));
class EmployeeManager {
    constructor() {
        this.employees = [];
    }
    addEmployee(emp) {
        this.employees.push(emp);
    }
    getByDepartment(dept) {
        return this.employees.filter((e) => e.department === dept);
    }
    getAll() {
        return this.employees;
    }
}
function calculateTotalSalary(salary) {
    var _a;
    return salary.base + ((_a = salary.bonus) !== null && _a !== void 0 ? _a : 0);
}
const manager = new EmployeeManager();
manager.addEmployee({
    id: 1,
    name: 'Robin',
    role: 'Developer',
    department: Department.Engineering,
    meta: {
        skills: ['TypeScript', 'Angular'],
        experience: 3,
    },
});
manager.addEmployee({
    id: 2,
    name: 'Sara',
    role: 'Designer',
    department: Department.Marketing,
    meta: {
        skills: ['Figma', 'Illustrator'],
        experience: 2,
    },
});
const engTeam = manager.getByDepartment(Department.Engineering);
console.log('Engineering Team:', engTeam);
const salary = calculateTotalSalary({ base: 50000, bonus: 10000 });
console.log('Total Salary:', salary);
//# sourceMappingURL=generics_class.js.map