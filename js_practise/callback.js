function createEmail(user, callback) {
  let msg = `${user} welcome to bd`;
  callback(msg);
}

function sendEmail(content) {
  console.log(content);
}

createEmail("Robin", sendEmail);


// 

function totalSum(a, b, callback) {
  let sum = a + b;
  callback(sum);
}

function showTotal(result) {
  console.log(result);
}

totalSum(10, 20, showTotal);

// 


