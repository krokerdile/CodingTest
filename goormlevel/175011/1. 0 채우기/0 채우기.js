// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	let input = [];
	
	for await (const line of rl) {
		input.push(line.split(" ").map(Number));
		rl.close();
	}
	
	let idx = [];
	for(let i=1; i<= input[0][0]; i++){
		if(input[i].includes(0)){
			idx.push(i);
			idx.push(input[i].indexOf(0));
		}
	}
	
	let answer = 0;
	for(let i=1; i<=input[0][0]; i++){
		if(i == idx[0]){
			input[i].map((num)=>{
				answer += num;
			})
		}
		else{
			answer += input[i][idx[1]];
		}
	}
	
	console.log(answer);
	
	process.exit();
})();
