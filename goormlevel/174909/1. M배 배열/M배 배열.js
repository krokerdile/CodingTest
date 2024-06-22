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
    const A = input[1].split(' ').map(Number);

    const mArr = A.map(el => el % M === 0 ? el : el * M);
    console.log(mArr.join(' '));
});
