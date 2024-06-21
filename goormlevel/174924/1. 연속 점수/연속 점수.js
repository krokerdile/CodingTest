const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", (line) => {
  input.push(line);
});

rl.on("close", () => {
  const N = Number(input[0]);
  const scores = input[1].split(" ").map(Number);

  let max = scores[0];
  let inArow = scores[0];
  for (let i = 1; i < N; i++) {
    if (scores[i] === scores[i - 1] + 1) inArow += scores[i];
    else inArow = scores[i];
    max = Math.max(max, inArow);
  }
  console.log(max);

  process.exit(0);
});