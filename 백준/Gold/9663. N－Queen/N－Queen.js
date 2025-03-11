let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

const N = Number(input);

let answer = 0;
let row = Array.from({ length: N + 1 }, () => 0); // 각 행(row)에 놓인 퀸의 열(column) 위치 저장

function check(L) {
  for (let i = 0; i < L; i++) {
    // 같은 열(column)에 존재하는지 검사
    if (row[L] === row[i]) return false;
    
    // 대각선 검사: (행 차이 == 열 차이)면 같은 대각선 상에 존재
    if (L - i === Math.abs(row[L] - row[i])) return false;
  }
  return true;
}

function DFS(L) {
  if (L === N) {
    answer++;
  } else {
    for (let i = 0; i < N; i++) {
      row[L] = i; // L번째 행(row)의 i번째 열(column)에 퀸 배치
      if (check(L)) { // 현재 배치가 유효한 경우
        DFS(L + 1); // 다음 행 탐색
      }
    }
  }
}

DFS(0); // 0번째 행부터 탐색 시작
console.log(answer);