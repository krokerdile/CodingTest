// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	let input = [];
	for await (const line of rl) {
		input.push(line);
		rl.close();
	}
	
	input[0] = input[0].split(" ").map(Number);
	let answer = input[2].replace(input[1],'');
	while(input[2].includes(input[1])){
		input[2] =  input[2].replace(input[1],'');
	}
	console.log(input[2] == '' ? 'EMPTY' : input[2]);
	process.exit();
})();
