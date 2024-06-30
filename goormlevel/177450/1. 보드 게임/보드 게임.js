const readline = require("readline");

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  for await (const line of rl) {
    const N = Number(line);
    const dp = new Array(N + 1).fill(0);

    dp[0] = 1;
    if (N >= 1) dp[1] = 1;
    for (let i = 2; i <= N; i++) {
      dp[i] = (dp[i - 1] + (i >= 3 ? dp[i - 3] : 0)) % 1000000007;
    }
    console.log(dp[N]);
    rl.close();
  }

  process.exit();
})();