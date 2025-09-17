let user;

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => (user = data));
// console.log(user); undefined because of fetch runs asynchronously

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => {
    user = data;
    console.log(user);
  });

// best practice

async function getUser() {
  let res = await fetch("https://jsonplaceholder.typicode.com/users");
  return await res.json();
}
getUser().then((data) => console.log("User data ", data));

// Fetch a user, then their posts (Chained requests)

async function getUserAndPosts() {
  try {
    let userRes = await fetch("https://jsonplaceholder.typicode.com/users/1");
    let user = await userRes.json();

    let postRes = await fetch(
      "`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`"
    );
    let post = await postRes.json();

    console.log(user);
    console.log(post.slice(0, 3));
  } catch (error) {
    console.log(error);
  }
}

//

async function getMultipleUsers() {
  try {
    let [user1, user2] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users/1").then((res) =>
        res.json()
      ),
      fetch("https://jsonplaceholder.typicode.com/users/2").then((res) =>
        res.json()
      ),
    ]);

    console.log("User 1:", user1.name);
    console.log("User 2:", user2.name);
  } catch (err) {
    console.error("Error fetching users:", err);
  }
}

getMultipleUsers();

async function getAllMeal() {
  const res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata"
  );
  const meal = await res.json();
  console.log(meal);

}


