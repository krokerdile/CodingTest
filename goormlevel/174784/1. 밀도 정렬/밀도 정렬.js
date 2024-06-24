const readline = require('readline');

(async () => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const input = [];
    
    for await (const line of rl) {
        input.push(line.split(" ").map(Number));
    }

    const len = input.shift()[0];
    const list = [];

    input.forEach((num, idx) => {
        const density = num[0] / num[1];
        list.push({ index: idx + 1, density: density, weight: num[0] });
    });

    list.sort((a, b) => {
        if (b.density !== a.density) return b.density - a.density;
        if (b.weight !== a.weight) return b.weight - a.weight;
        return a.index - b.index;
    });

    console.log(list[0].index);
    process.exit();
})();
