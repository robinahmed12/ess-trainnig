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
// Usage
//# sourceMappingURL=generics_class.js.map