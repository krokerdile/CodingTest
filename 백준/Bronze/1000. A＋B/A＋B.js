const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

list = input.split(" ");

console.log(parseInt(list[0]) + parseInt(list[1]));
