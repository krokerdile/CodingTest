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
    const [N, M] = input[0].split(' ').map(Number);
    const cards = input.slice(1).map(Number);

    let count = new Array(N + 1).fill(0);
    let cardTypes = 0;
    let result = -1;

    for (let i = 0; i < M; i++) {
        count[cards[i]]++;
        if (count[cards[i]] === 1) cardTypes++;
        if (cardTypes === N) {
            result = i + 1;
            break;
        }
    }

    console.log(result);
});