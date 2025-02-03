const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let [n, m] = input[0].split(' ').map(Number);
let visited = Array.from({ length: n }, () => Array(m).fill(-1));
let maze = [];

for (let i = 1; i < n + 1; i++) {
    maze.push(input[i].split(' ').map(Number));
}

let start = [];
for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        if (maze[i][j] === 2) {
            start = [i, j];
        }
    }
}

function bfs(x, y) {
    let dx = [-1, 1, 0, 0];
    let dy = [0, 0, -1, 1];
    let queue = [];

    queue.push([x, y]);
    visited[x][y] = 0;

    while (queue.length > 0) {
        let [x, y] = queue.shift();
        for (let i = 0; i < 4; i++) {
            let nx = x + dx[i];
            let ny = y + dy[i];
            if (nx >= 0 && nx < n && ny >= 0 && ny < m) {
                if (maze[nx][ny] === 1 && visited[nx][ny] === -1) {
                    visited[nx][ny] = visited[x][y] + 1;
                    queue.push([nx, ny]);
                }
            }
        }
    }
}

bfs(start[0], start[1]);

for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        if (maze[i][j] === 0) {
            visited[i][j] = 0;
        }
    }
}

// 각 행을 공백으로 구분된 문자열로 변환
console.log(visited.map(row => row.join(' ')).join('\n'));