const readline = require("readline");

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  for await (const line of rl) {
    const N = Number(line);
    let result = Array.from({ length: N }, () => Array(N).fill(0));
    let number = 1;
    
    for (let row = 0; row < N; row++) {
      for (let col = 0; col < N; col++) {
        result[row][col] = number++;
      }
    }
    result.forEach((row) => console.log(row.join(" ")));

    rl.close();
  }

  process.exit();
})();