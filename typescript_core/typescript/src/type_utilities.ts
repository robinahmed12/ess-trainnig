interface Users {
  id: number;
  name: string;
  age: number;
}

interface Sports {
  id: number;
  year: number;
  country: string;
}

// pick
type UserPreview = Pick<Users, "id" | "name">;
const u4: UserPreview = { id: 1, name: "Dave" };
// console.log(u4);

type SportsInfo = Pick<Sports, "country" | "id">;
const sport1: SportsInfo = { country: "BD", id: 9 };
console.log(sport1);

// omit
type UserWithoutAge = Omit<Users, "age">;
const u5: UserWithoutAge = { id: 1, name: "Eve" };
console.log(u5);
type NewSports = Omit<Sports, "year">;
const sport2: NewSports = { id: 1, country: "thailand" };
console.log(sport2);

// record

type Role = "admin" | "user";
const roles: Record<Role, string> = {
  admin: "Full Access",
  user: "Limited Access",
};

type Product = "paid" | "unpaid";
const products: Record<Product, string> = {
  paid: "yes product is paid by me",
  unpaid: "this one is unpaid",
};
console.log(products);

// console.log(roles);

// Exclude & Extract
type Status = "success" | "error" | "pending";
type NonPending = Exclude<Status, "pending">;
type OnlyPending = Extract<Status, "pending">; // "success" | "error"

// const s1: NonPending = "success"
// const s2: NonPending = "pending" error
// const s3: OnlyPending = "pending" error
const s4: OnlyPending = "pending";
console.log(s4);

// return type
function getUser() {
  return { id: 1, name: "Alice" };
}
type User = ReturnType<typeof getUser>;
const u: User = { id: 2, name: "Bob" };
console.log(u);

//

async function fetchData() {
  return ["a", "b", "c"];
}
type Data = Awaited<ReturnType<typeof fetchData>>;

const d: Data = ["robin", "shawn", "maria"];
console.log(d);

// parameters

function logUser(id: number, name: string) {
  console.log(id, name);
}

type LogParams = Parameters<typeof logUser>;

const args: LogParams = [1, "Alice"];
logUser(...args);

//

type CatName = "miffy" | "boris" | "mordred";

interface CatInfo {
  age: number;
  breed: string;
}

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthand" },
};

console.log(cats.boris);

//

interface countryList {
  name: string;
  area: number;
  population: number;
  year: number;
}

type pickCountry = Pick<countryList, "area">;
const C1: pickCountry = { area: 100 };
type omitCountry = Omit<countryList, "population">;
const c2: omitCountry = { name: "Italy", year: 2002, area: 400 };
type partialCountry = Partial<countryList>;
type requiredCountry = Required<countryList>;
const country: countryList = {
  name: "bd",
  area: 700,
  population: 400,
  year: 2002,
};
console.log(country);

//

type sports = "cricket" | "football" | "hockey";

const recordSports: Record<sports, string> = {
  cricket: " i love cricket",
  football: "",
  hockey: ""
};
console.log(recordSports);



