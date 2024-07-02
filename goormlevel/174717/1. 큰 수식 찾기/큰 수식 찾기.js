const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	for await (const line of rl) {
		const [A, B] = line.split(' ');
    console.log(Math.max(eval(A),eval(B)));
		rl.close();
	}
	
	process.exit();
})();