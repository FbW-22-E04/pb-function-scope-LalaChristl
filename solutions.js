// 1. Print Exponential Values

function expoValues(x, y) {
    console.log(typeof x, typeof y);
}
expoValues(3, 5)

let sum = 1
for (let i = 1; i <= 5; i++) {
    sum = sum * 3;
    console.log(sum);
  }

//   function expoValues2(a, b)
//   {
//     console.log(typeof a, typeof b);
// }
//   expoValues2(2, 8)

console.log('-----------------------------------');

let sum2 = 1
for (let i = 1; i <= 8; i++) {
    sum2 = sum2 * 2;
    console.log(sum2);
  }


  console.log('-----------------------------------');

//   2. Fruits

let fruit = 'mango';
function printFavoriteFruit() {
    console.log('My favorite fruit is', fruit = 'banana');
}
printFavoriteFruit()

console.log('-----------------------------------');

// 3. Multiply a Number by Itself

function exponent(a, b) {
let result = 1
for (let i = 0; i < b; i++) {
result = result * a;
console.log(result);
}
}
exponent(6, 4);