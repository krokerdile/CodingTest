const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
rl.on('line', (line) => {
    input.push(line);
});

rl.on('close', () => {
	const couple = input[1].split(' ').map(Number);
	const fail = couple.reduce((acc, cur) => acc += cur);
	console.log(fail);
});