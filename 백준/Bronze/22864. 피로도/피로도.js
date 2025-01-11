const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let [A, B, C, M] = input[0].split(' ').map(Number);

//A >> 한 시간 일하면 쌓이는 피로도
//B >> 한 시간 일하면 처리할 수 있는 일의 양
//C >> 한 시간을 쉬면 C만큼 피로도가 줄어든다.
//M >> 최대 M시간 일할 수 있음.

//5 3 2 10
// 1시간 일하면 5만큼 피로도가 쌓인다.
// 1시간 일하면 3만큼 처리할 수 있다.
// 1시간 쉬면 2만큼 피로도가 줄어든다.
// 10시간 일할 수 있다.

//24시간 동안 일할 수 있는 분량은

let tired = 0;
let work = 0;

for (let i = 0; i < 24; i++) {
  //만약 피로도가 최대 피로치를 처음 부터 넘는 다면 0으로 반환하기
  if (A > M) {
    work = 0;
    break;
  }
  //만약에 일을 했을 때 피로도가 넘는다면 쉬어주기
  if (tired + A > M) {
    tired -= C;
    if (tired < 0) {
      tired = 0;
    }
  }
  //피로도가 넘지 않는 다면 일하기
  else {
    tired += A;
    work += B;
  }
}

console.log(work);
