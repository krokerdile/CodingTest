// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	let input = [];
	
	for await (const line of rl) {
		input.push(line);
		rl.close();
	}
	
	 
  let n = Number(input[0]);
  let answer = BigInt(1);
  
  for (let i = 1; i <= n; i++) {
    answer *= BigInt(i);
  }

  const MOD = BigInt(1000000007);
  console.log(Number(answer % MOD));
})();
