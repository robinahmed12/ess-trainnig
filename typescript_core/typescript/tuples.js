var favSports = [
    "cricket",
    "football",
    "badminton",
];
favSports.push("F1");
console.log(favSports);
var book1 = ["fiction", "henry", 2002, 300];
var book2 = ["history", "gray", 2002, 300];
var book3 = ["story", "peter", 2002, 300];
var book4 = ["science", "serlock", 2002, 300];
var library = [book1, book2, book3, book4];
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
var user1 = [1, "robin", "ro@bin.com", new Date()];
console.log(user1);
console.log(updatedName(user1, "shawon"));
// console.log(updatedName( 1, "shawon"));
