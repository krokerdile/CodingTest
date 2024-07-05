const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
	
rl.on('line', (input) => {
  const [N, M] = input.split(' ').map(Number);
  const originalWeight = N * 0.07;
  const newWeight = N + M;
  const newSaltPercent = (originalWeight / newWeight) * 100;
  const answer = Math.floor(newSaltPercent * 100) / 100;
  console.log(answer.toFixed(2));
  rl.close();
});