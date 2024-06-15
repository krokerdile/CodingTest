// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let input = [];
	for await (const line of rl) {
		input.push(line);
		rl.close();
	}
	
	input[1] = input[1].split(" ").map(Number);
	
	let sum = 0;
	
	input[1].map((num)=>{
		sum += num;
	})
	
	console.log(sum.toString(8));
	
	process.exit();
})();
