const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

//창고에 토마토 보관
//왼쪽, 오른쪽, 앞, 뒤 방향에 있는 토마토 인접 판단
//대각선 방향에 있는 토마토들에게는 영향을 주지 못함
//정수 1은 익은 토마토
//정수 0은 익지 않은 토마토
//정수 -1은 토마토가 들어있지 않은 칸

//첫 줄에 상자의 크기 M,N
let [m, n] = input[0].split(' ').map(Number);

//방문한 곳을 체크해주는 배열
let visited = Array.from({ length: n }, () => Array(m).fill(-1));

//토마토의 정보를 담아주는 배열
let tomato = [];

for (let i = 1; i < n + 1; i++) {
  tomato.push(input[i].split(' ').map(Number));
}

//익은 토마토 위치 찾기 1인 토마토
let start = [];
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (tomato[i][j] === 1) {
      start.push([i, j]);
    }
  }
}

function bfs() {
  let dx = [-1, 1, 0, 0];
  let dy = [0, 0, -1, 1];
  let queue = [];

  for (let i = 0; i < start.length; i++) {
    queue.push(start[i]);
    visited[start[i][0]][start[i][1]] = 1;
  }

  let head = 0;
  while (queue.length > head) {
    let [x, y] = queue[head++];
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (nx >= 0 && nx < n && ny >= 0 && ny < m) {
        if (tomato[nx][ny] === 0 && visited[nx][ny] === -1) {
          visited[nx][ny] = visited[x][y] + 1;
          queue.push([nx, ny]);
        }
      }
    }
  }
}

bfs();

let maxDays = 0;
let allRipe = true;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (tomato[i][j] === 0 && visited[i][j] === -1) {
      allRipe = false;
    }
    if (visited[i][j] > maxDays) {
      maxDays = visited[i][j];
    }
  }
}

if (!allRipe) {
  console.log(-1);
} else {
  console.log(maxDays - 1);
}
