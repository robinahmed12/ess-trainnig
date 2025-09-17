const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("async task is completed");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  // console.log("promise consumed");
});

//

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("async task 2");
    resolve();
  }, 1000);
}).then(() => {
  console.log("async task 2 resolved");
});

//
const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ username: "chai", email: "chai@chai.com" });
  }, 1000);
});

promiseThree.then((user) => {
  console.log(user);
});
//

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "robin", password: 123 });
    } else {
      reject("error: something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    // console.log(user);
    return user.username;
  })
  .then((username) => {
    // console.log(username);
  })
  .catch((error) => {
    // console.log(error);
  });

// const promiseFive = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = true;
//     if (!error) {
//       resolve({ username: "javascript", password: "123" });
//     } else {
//       reject("error: js went wrong");
//     }
//   }, 1000);
// });

// async function consumePromiseFive() {
//   try {
//     const response = await promiseFive;
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }
// consumePromiseFive();

//

async function getAllUser() {
  try {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata"
    );
    const data = await response.json();
    // console.log(data);
  } catch (error) {
    // console.log(error);
  }
}
getAllUser();

const promiseSix = new Promise((resolve, reject) => {
  setTimeout(() => {
    let myname = "Robin";
    if (!myname) {
      resolve({ isAdmin: true });
    } else {
      reject({ isAdmin: false });
    }
  }, 1000);
});

async function consumePromiseSix() {
  try {
    const res = await promiseSix;
    // const data = await res.json();
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseSix();

async function userData() {
  try {
  } catch (error) {}
}

// function delay(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }
// async function stepOne() {
//   console.log("Step 1 started");
//   await delay(1000);
//   console.log("Step 1 completed");
//   return "Data from step 1";
// }
// async function stepTwo(data) {
//   console.log("Step 2 started with:", data);
//   await delay(1500);
//   if (Math.random() > 0.5) {
//     throw new Error("Random failure at step 2");
//   }
//   console.log("Step 2 completed");
//   return "Data from step 2";
// }
// async function stepThree(data) {
//   console.log("Step 3 started with:", data);
//   await delay(500);
//   console.log("Step 3 completed");
//   return ":tada: Final Result";
// }
// async function main() {
//   try {
//     const one = await stepOne();
//     const two = await stepTwo(one);
//     const three = await stepThree(two);
//     console.log("Main completed with:", three);
//   } catch (error) {
//     console.log("Caught error:", error.message);
//   }
// }
// main();


async function foo (){
  return 42
}
foo().then(console.log())
console.log("foo after");
