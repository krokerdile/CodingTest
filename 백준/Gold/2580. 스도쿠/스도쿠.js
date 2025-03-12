const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let board = input.map((line) => line.split(' ').map(Number)); // 스도쿠 배열
let zero = []; // 빈 칸 좌표 리스트

// 0의 위치 저장
for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    if (board[i][j] === 0) {
      zero.push([i, j]);
    }
  }
}

// 유효성 검사 함수
function check(x, y, num) {
  // 같은 행 검사
  for (let i = 0; i < 9; i++) {
    if (board[x][i] === num) return false;
  }

  // 같은 열 검사
  for (let i = 0; i < 9; i++) {
    if (board[i][y] === num) return false;
  }

  // 3x3 박스 검사
  let startX = Math.floor(x / 3) * 3;
  let startY = Math.floor(y / 3) * 3;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[startX + i][startY + j] === num) return false;
    }
  }

  return true;
}

// 백트래킹 DFS 함수
function dfs(idx) {
  if (idx === zero.length) {
    board.forEach((row) => console.log(row.join(' '))); // 스도쿠 완성 후 출력
    process.exit(0); // 첫 번째 정답을 찾으면 즉시 종료
  }

  let [x, y] = zero[idx]; // 현재 빈 칸 위치

  for (let num = 1; num <= 9; num++) {
    if (check(x, y, num)) {
      board[x][y] = num; // 숫자 배치
      dfs(idx + 1); // 다음 빈 칸 탐색
      board[x][y] = 0; // 원래 상태로 되돌림 (백트래킹)
    }
  }
}

// DFS 시작
dfs(0);
