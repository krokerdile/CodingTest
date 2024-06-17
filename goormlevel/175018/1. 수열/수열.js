const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line) => {
    input.push(line);
    rl.close();
});

rl.on('close', () => {
    const n = parseInt(input[0], 10);
    console.log(fabo(n));
});

function fabo(n) {
    const MOD = 1000000007;
    if (n === 1) return 0;
    if (n === 2) return 1;

    let a = 0, b = 1;
    for (let i = 3; i <= n; i++) {
        let c = (a + b) % MOD;
        a = b;
        b = c;
    }
    return b;
}
