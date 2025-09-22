"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const favSports = [
    "cricket",
    "football",
    "badminton",
];
favSports.push("F1");
console.log(favSports);
const book1 = ["fiction", "henry", 2002, 300];
const book2 = ["history", "gray", 2002, 300];
const book3 = ["story", "peter", 2002, 300];
const book4 = ["science", "serlock", 2002, 300];
const library = [book1, book2, book3, book4];
function createUser(id, name, email) {
    return [id, name, email, new Date()];
}
// console.log(createUser(1, "robin", "e@m.com" ));
function getEmail(user) {
    return user[2];
}
function updatedName(user, newName) {
    return [user[0], newName, user[2], user[3]];
}
const user1 = [1, "robin", "ro@bin.com", new Date()];
console.log(user1);
console.log(updatedName(user1, "shawon"));
function createColor(r, g, b) {
    return [
        Math.min(255, Math.max(0, r)),
        Math.min(255, Math.max(0, g)),
        Math.min(255, Math.max(0, b)),
    ];
}
const myColor = createColor(200, 100, 400);
console.log(`RGB Color: rgb(${myColor.join(',')})`);
//# sourceMappingURL=tuples.js.map