const abc = ['a', 'b', 'c', 'd', 'c', 'd', 'e'];
const numbers = ['1', '2', '3', '4'];
if (abc === numbers) {
}

// const a = abc[0];
// const b = abc[1];

const [a, , c, ...rest] = abc;

console.log(a);
// console.log(b);
console.log(c);
console.log(rest);
console.log(c);
