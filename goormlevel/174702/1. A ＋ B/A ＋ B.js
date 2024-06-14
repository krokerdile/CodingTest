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
	console.log(input[0][0]+input[0][1]);
	
	process.exit();
})();
