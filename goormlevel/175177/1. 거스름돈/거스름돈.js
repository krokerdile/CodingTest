// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	let input = [];
	for await (const line of rl) {
		input.push(line);
		rl.close();
	}
	
	let num = [40,20,10,5,1];
	
	let i = 0; 
	let answer = 0;
	while(i != 5){
		if(input[0] - num[i] >= 0){
			input[0] -= num[i]
			answer += 1;
		}else{
			i += 1;
		}
	}
	
	console.log(answer);
	
	process.exit();
})();
