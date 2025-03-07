class Node {
  constructor(item) {
    this.item = item;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  free() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(item) {
    const node = new Node(item);
    if (this.head == null) {
      this.head = node;
    } else {
      this.tail.next = node;
    }

    this.tail = node;
    this.length += 1;
  }

  pop() {
    const popItem = this.head;
    this.head = this.head.next;
    this.length -= 1;
    return popItem.item;
  }
}

const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");
const T = +input.shift();

function D(num) {
  num *= 2;
  if (num > 9999) num %= 10000;
  return num;
}

function S(num) {
  if (num == 0) num = 9999;
  else {
    num -= 1;
  }
  return num;
}

function L(num) {
  const n = Math.floor(num / 1000);
  const x = num % 1000;
  return x * 10 + n;
}

function R(num) {
  const n = num % 10;
  const x = (num - n) / 10;
  return n * 1000 + x;
}
const cmd = [D, S, L, R];
const anwser = [];

function bfs(start, end) {
  let visited = Array(10001).fill(false);
  visited[start] = true;
  const q = new Queue();
  q.push([start, ""]);
  while (q.length > 0) {
    const [now, history] = q.pop();
    for (let i = 0; i < 4; i++) {
      const next = cmd[i](now);
      if (next == end) {
        return history + cmd[i].name;
      }

      if (!visited[next]) {
        visited[next] = true;
        q.push([next, history + cmd[i].name]);
      }
    }
  }
}

for (let i = 0; i < T; i++) {
  let [start, end] = input[i].split(" ");
  anwser.push(bfs(+start, +end));
}

console.log(anwser.join("\n"));