const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

//R,C 격자 크기, N초 뒤에 상태
let [R, C, N] = input
  .shift()
  .split(' ')
  .map((i) => parseInt(i));
//R*C의 격자판 위에 봄버맨이 있음
//폭탄이 있는 칸은 3초 뒤에 폭발
//폭탄칸과 인접한 네칸도 같이 파괴됨 -> (r-1,c),(r+1,c),(r,c-1),(r,c+1)
//인접한 칸에 폭탄이 있으면 폭발 없이 파괴됨 -> 연쇄 반응은 없음

//빈칸
const EMPTY = '.';

//폭탄
const BOMB = 'O';

let list = input.map((i) => i.split(''));

let bomb = new Array(R).fill(0).map((i) => new Array(C).fill(0));
const dir = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

let time = 1;

//1초일 때는 아무것도 안함
//2초 일때 모든 칸에 폭탄 설치
//폭탄 설치 된 곳을 3으로 둬서 초가 지날 때마다 1씩 감소
//폭탄이 터지면 인접한 네칸도 터짐
//폭탄이 터진 후엔 빈칸으로 바뀜
for (let i = 0; i < R; i++) {
  for (let j = 0; j < C; j++) {
    if (list[i][j] === BOMB) {
      bomb[i][j] = 3;
    }
  }
}

while (time <= N) {
  //폭탄 설치
  if (time % 2 === 0) {
    for (let i = 0; i < R; i++) {
      for (let j = 0; j < C; j++) {
        if (list[i][j] === EMPTY) {
          //2초에 전체 폭탄 설치 해줘야 됨
          //현재 시간 +3초 로 해서 폭탄 설치 해주기
          bomb[i][j] = time + 3;
          list[i][j] = BOMB;
        }
      }
    }
  } else {
    for (let i = 0; i < R; i++) {
      for (let j = 0; j < C; j++) {
        if (bomb[i][j] === time) {
          list[i][j] = EMPTY;
          for (let k = 0; k < 4; k++) {
            let nx = i + dir[k][0];
            let ny = j + dir[k][1];
            if (
              nx >= 0 &&
              nx < R &&
              ny >= 0 &&
              ny < C &&
              list[nx][ny] === BOMB &&
              bomb[nx][ny] !== time
            ) {
              list[nx][ny] = EMPTY;
              bomb[nx][ny] = 0;
            }
          }
        }
      }
    }
  }
  time++;
}

let result = '';

for (let i = 0; i < R; i++) {
  result += list[i].join('') + '\n';
}

console.log(result);
