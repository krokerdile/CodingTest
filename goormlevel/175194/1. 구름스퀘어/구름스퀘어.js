const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
rl.on('line', (line) => {
    input.push(line);
});

rl.on('close', () => {
    const N = parseInt(input[0]);
    const events = [];

    for (let i = 1; i <= N; i++) {
        const [s, e] = input[i].split(' ').map(Number);
        events.push([s, e]);
    }
  
    events.sort((a, b) => {
        if (a[1] === b[1]) return a[0] - b[0];
        return a[1] - b[1];
    });

    let count = 0;
    let currentTime = -1;

    for (let [start, end] of events) {
        if (start > currentTime) {
            count++;
            currentTime = end;
        }
    }

    console.log(count);
});