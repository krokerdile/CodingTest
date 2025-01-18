const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

//si = 시작시간, ti = 종료시간
//N개의 수업 최소 강의실 이용해서 모든 수업 가능하게 해야 됨

//시작시간과 종료시간을 이벤트로 변환
const events = [];
for (let i = 1; i < input.length; i++) {
  let list = input[i].split(' ').map((el) => parseInt(el));
  events.push({ time: list[0], type: 'start' });
  events.push({ time: list[1], type: 'end' });
}

//이벤트를 시간순으로 정렬
//같은 시간일 경우 종료 이벤트가 먼저 오도록 정렬
events.sort((a, b) => {
  if (a.time === b.time) {
    return a.type === 'end' ? -1 : 1;
  }
  return a.time - b.time;
});

let currentRooms = 0; //현재 사용중인 회의실 수

let maxRooms = 0; //필요한 최대 회의실 수

//모든 이벤트를 순회하면서 필요한 회의실 수를 계산
for (const event of events) {
  if (event.type === 'start') {
    currentRooms++;
    maxRooms = Math.max(maxRooms, currentRooms);
  } else {
    currentRooms--;
  }
}

console.log(maxRooms);
