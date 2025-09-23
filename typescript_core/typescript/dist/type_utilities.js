"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const u4 = { id: 1, name: "Dave" };
const sport1 = { country: "BD", id: 9 };
console.log(sport1);
const u5 = { id: 1, name: "Eve" };
console.log(u5);
const sport2 = { id: 1, country: "thailand" };
console.log(sport2);
const roles = {
    admin: "Full Access",
    user: "Limited Access",
};
const products = {
    paid: "yes product is paid by me",
    unpaid: "this one is unpaid",
};
console.log(products);
// const s1: NonPending = "success"
// const s2: NonPending = "pending" error
// const s3: OnlyPending = "pending" error
const s4 = "pending";
console.log(s4);
// return type
function getUser() {
    return { id: 1, name: "Alice" };
}
const u = { id: 2, name: "Bob" };
console.log(u);
//
function fetchData() {
    return __awaiter(this, void 0, void 0, function* () {
        return ["a", "b", "c"];
    });
}
const d = ["robin", "shawn", "maria"];
console.log(d);
// parameters
function logUser(id, name) {
    console.log(id, name);
}
const args = [1, "Alice"];
logUser(...args);
//# sourceMappingURL=type_utilities.js.map