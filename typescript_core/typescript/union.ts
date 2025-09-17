// exercise 01

type RegularUser = {
  id: number;
  name: string;
  role: "regular";
  lastLogin: Date;
};

type AdminUser = {
  id: number;
  name: string;
  role: "admin";
  permission: string[];
};

type user = RegularUser | AdminUser;
// function

const newAdmin: AdminUser = {
  id: 56,
  name: "hanry",
  role: "admin",
  permission: ["update", "delete"],
};
console.log(newAdmin);

// exercise 2

function calculateSum(input: number | number[]) {
  if (Array.isArray(input)) {
    return input.reduce((acc, curr) => acc + curr, 0);
  }

  return input;
}

const sum = calculateSum([6, 7, 8, 9]);
console.log(sum);

// exercise 3

type mixed = string | number;

type CartItem = {
  name: string;
  price: number;
};

const cart: CartItem[] = [
  { name: "shoes", price: 200 },
  { name: "shirt", price: 500 },
  { name: "pant", price: 700 },
];

function cartTotal(items: CartItem[]): number {
  return items.reduce((acc, item) => acc + item.price, 0);
}

const total = cartTotal(cart);
console.log(total);

//

function checkNUmber(value: number): "even" | "odd" | false {
  if (isNaN(value) || !isFinite(value)) {
    return false;
  }

  return value % 2 === 0 ? "even" : "odd";
}

const numbers = [2, 3, 4, 6, NaN, Infinity, 42, 7];
numbers.forEach((num) => {
  const result = checkNUmber(num);
  if (result === false) {
    console.log(`${num} is not a valid number`);
  } else {
    console.log(`${num} is ${result}`);
  }
});
