const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(n, meetings) {
  // 모든 시작 시간과 종료 시간을 이벤트로 변환
  const events = [];
  for (let i = 0; i < n; i++) {
    events.push({ time: meetings[i][0], type: 'start' });
    events.push({ time: meetings[i][1], type: 'end' });
  }

  // 이벤트를 시간 순으로 정렬
  // 같은 시간일 경우 종료 이벤트가 먼저 오도록 정렬
  events.sort((a, b) => {
    if (a.time === b.time) {
      return a.type === 'end' ? -1 : 1;
    }
    return a.time - b.time;
  });

  let currentRooms = 0; // 현재 사용 중인 회의실 수
  let maxRooms = 0; // 필요한 최대 회의실 수

  // 모든 이벤트를 순회하면서 필요한 회의실 수를 계산
  for (const event of events) {
    if (event.type === 'start') {
      currentRooms++;
      maxRooms = Math.max(maxRooms, currentRooms);
    } else {
      currentRooms--;
    }
  }

  return maxRooms;
}

let n = parseInt(input[0]);
let meetings = [];
for (let i = 1; i <= n; i++) {
  meetings.push(input[i].split(' ').map((x) => parseInt(x)));
}
console.log(solution(n, meetings)); // 출력: 2
