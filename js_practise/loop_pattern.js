
// transformation
const arr = [4, 5, 7, 9, 3, 6, 8];
for (let i = 0; i < arr.length; i++) {
  const element = arr[i];
//   console.log(element);
}

// filtering
const array =[60 , 69 ,50, 40, 46, 20]
const even = [];
for (let index = 0; index < array.length; index++) {
  if (array[index] % 2 === 0) {
    even.push(array[index]);
  }
}
// console.log(even);

// aggregation
const arr1 = [100,200,300]
let sum = 0
for(i = 0; i < arr1.length; i++) {
    sum += arr[i]
}
console.log(sum);

