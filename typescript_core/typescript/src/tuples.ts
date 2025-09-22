const favSports: [string, string, string] = [
  "cricket",
  "football",
  "badminton",
];
favSports.push("F1");
console.log(favSports);

type book = [string, string, number, number];

const book1: book = ["fiction", "henry", 2002, 300];
const book2: book = ["history", "gray", 2002, 300];
const book3: book = ["story", "peter", 2002, 300];
const book4: book = ["science", "serlock", 2002, 300];
const library: book[] = [book1, book2, book3, book4];
// console.log(library);

type userRecord = [id: number, name: string, email: string, createdAt: Date];

function createUser(id: number, name: string, email: string): userRecord {
  return [id, name, email, new Date()];
}

// console.log(createUser(1, "robin", "e@m.com" ));

function getEmail(user: userRecord): string {
  return user[2];
}

function updatedName(user: userRecord, newName: string): userRecord {
  return [user[0], newName, user[2], user[3]];
}

const user1: userRecord = [1, "robin", "ro@bin.com", new Date()];
console.log(user1);
console.log(updatedName(user1, "shawon"));

// console.log(updatedName( 1, "shawon"));

type RGB = [red: number, green: number, blue: number];
function createColor(r: number, g: number, b: number): RGB {
  return [
    Math.min(255, Math.max(0, r)),
    Math.min(255, Math.max(0, g)),
    Math.min(255, Math.max(0, b)),
  ];
}
const myColor = createColor(200, 100, 400);
console.log(`RGB Color: rgb(${myColor.join(',')})`);


export {}