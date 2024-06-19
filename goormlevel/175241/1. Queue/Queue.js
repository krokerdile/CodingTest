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
  const [N, K] = input[0].split(" ").map(Number);
  const commands = input.slice(1);
  let queue = [];

  for (let i = 0; i < N; i++) {
    const command = commands[i];

    if (command.startsWith("push")) {
      const value = parseInt(command.split(" ")[1], 10);
      if (queue.length >= K) {
        console.log("Overflow");
      } else {
        queue.push(value);
      }
    } else if (command === "pop") {
      if (queue.length === 0) {
        console.log("Underflow");
      } else {
        console.log(queue.shift());
      }
    }
  }

  process.exit(0);
});