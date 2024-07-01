// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	let input = [];
	for await (const line of rl) {
		input.push(line);
		rl.close();
	}
	
	let num = parseInt(input[0]);
	
	let initial = BigInt(3);
	
	for(let i=1; i<num; i++){
		initial *= BigInt(2);
		initial %= BigInt(100000007);
	}
	
	console.log(parseInt(initial));
	
	process.exit();
})();
