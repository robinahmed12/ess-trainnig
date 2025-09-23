"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Logger {
    log(data) {
        const timestamp = new Date().toISOString();
        console.log(`${timestamp} , ${JSON.stringify(data)}`);
    }
}
const stringLogger = new Logger();
stringLogger.log("system started");
const userLogger = new Logger();
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
//# sourceMappingURL=generics_class.js.map