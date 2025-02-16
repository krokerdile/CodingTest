const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

//스타트 링크의 사무실은 1*1 크기의 정사각형으로 이루어진 N*N 크기의 격자형으로 나타낼 수 있다.
//CCTV 5가지 종류가 있음
//종류별로 90도씩 회전할 수 있음
//회전한 경우를 애초에 다른 경우로 생각해야함
//미리 담아두고 dfs로 돌면서 최소값을 찾아야함
//bfs도 가능 하려나?
const type = [
  [[0], [1], [2], [3]],
  [
    [0, 2],
    [1, 3],
  ],
  [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 0],
  ],
  [
    [0, 1, 3],
    [0, 1, 2],
    [1, 2, 3],
    [2, 3, 0],
  ],
  [[0, 1, 2, 3]],
];

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

let [N, M] = input.shift().split(' ').map(Number);
let office = input.map((v) => v.split(' ').map(Number));

let cctv = [];
let min = N * M;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (office[i][j] !== 0 && office[i][j] !== 6) {
      cctv.push([office[i][j], i, j]);
    }
  }
}

//cctv를 찾아서 돌면서 5가지 경우의 수를 찾아야함
//찾았을때 해당 cctv가 가장 사각지대를 많이 볼 수 있는 경우를 찾아야함
//idx는 cctv 배열의 현재 위치를 전달해주기 위함
function dfs(office, cctv, idx) {
  if (idx === cctv.length) {
    let count = 0;

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (office[i][j] === 0) {
          count++;
        }
      }
    }

    min = Math.min(min, count);
    return;
  }

  let [cctvType, x, y] = cctv[idx];

  //백트래킹을 해야지 회전 하는 경우를 찾을 수 있음 >> bfs로는 안되지 않을까?
  //  let temp = office.map((v) => v.slice());

  for (let i = 0; i < type[cctvType - 1].length; i++) {
    //회전을 적용하기 위한 백트래킹
    let temp = office.map((v) => {
      return [...v];
    });

    for (let j = 0; j < type[cctvType - 1][i].length; j++) {
      let nx = x;
      let ny = y;

      while (true) {
        nx += dx[type[cctvType - 1][i][j]];
        ny += dy[type[cctvType - 1][i][j]];

        if (nx < 0 || nx >= N || ny < 0 || ny >= M || temp[nx][ny] === 6) {
          break;
        }

        if (temp[nx][ny] === 0) {
          temp[nx][ny] = '#';
        }
      }
    }

    dfs(temp, cctv, idx + 1);
  }
}

dfs(office, cctv, 0);

console.log(min);
