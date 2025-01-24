const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const result = data.map((el) => act(el));
  console.log(result.join("\n"));
}

function act(str) {
  const [a, b] = str.split(" ");

  let left = 0,
    right = 0,
    txt = "";
  while (right < b.length) {
    if (a[left] === b[right]) {
      txt += a[left];
      left++;
    }
    right++;
  }

  return a === txt ? "Yes" : "No";
}

solution(input);