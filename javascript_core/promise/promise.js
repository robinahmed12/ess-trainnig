const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("async task is completed");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("promise consumed");
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
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  });

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "javascript", password: "123" });
    } else {
      reject("error: js went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive();

//

async function getAllUser() {
  try {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata"
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
getAllUser();
