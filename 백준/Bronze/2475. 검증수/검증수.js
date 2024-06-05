const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ');

const sum = input.reduce((num1, num2) => num1 + num2 * num2, 0);

console.log(sum % 10);