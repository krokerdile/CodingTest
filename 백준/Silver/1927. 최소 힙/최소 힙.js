const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let N = parseInt(input.shift());

class MinHeap {
  constructor() {
    this.heap = [];
  }

  // 부모, 자식 인덱스 구하기
  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }
  getLeftChildIndex(i) {
    return 2 * i + 1;
  }
  getRightChildIndex(i) {
    return 2 * i + 2;
  }

  // 값 삽입
  insert(value) {
    this.heap.push(value); // 1. 마지막에 삽입
    this.heapifyUp(); // 2. 부모와 비교해 위로 올림
  }

  // Heapify Up: 삽입된 노드를 부모와 비교하며 위로 이동
  heapifyUp() {
    let index = this.heap.length - 1; // 새로 삽입된 노드의 인덱스

    // 부모와 비교, 더 작으면 Swap
    while (index > 0) {
      const parentIndex = this.getParentIndex(index);

      if (this.heap[index] < this.heap[parentIndex]) {
        // Swap (자식이 부모보다 작으면 교환)
        [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];

        // 인덱스를 부모로 이동 (계속 위로)
        index = parentIndex;
      } else {
        break; // 부모보다 크거나 같으면 종료
      }
    }
  }

  // 최솟값 삭제
  extractMin() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop(); // 마지막 노드를 루트로 이동
    this.heapifyDown(); // 자식과 비교해 내려감
    return min;
  }

  // Heapify Down: 삭제된 루트를 자식과 비교하며 아래로 이동
  heapifyDown() {
    let index = 0;
    const length = this.heap.length;

    while (this.getLeftChildIndex(index) < length) {
      let smallerChildIndex = this.getLeftChildIndex(index);
      const rightChildIndex = this.getRightChildIndex(index);

      // 오른쪽 자식이 존재하고, 더 작으면 오른쪽 선택
      if (rightChildIndex < length && this.heap[rightChildIndex] < this.heap[smallerChildIndex]) {
        smallerChildIndex = rightChildIndex;
      }

      // 부모가 자식보다 작으면 종료
      if (this.heap[index] <= this.heap[smallerChildIndex]) break;

      // Swap
      [this.heap[index], this.heap[smallerChildIndex]] = [
        this.heap[smallerChildIndex],
        this.heap[index],
      ];
      index = smallerChildIndex; // 계속 아래로 이동
    }
  }
}

let list = new MinHeap();

const result = [];

for (let i = 0; i < N; i++) {
  let num = parseInt(input[i]);
  if (num == 0) {
    let temp = list.extractMin();
    if (temp) {
      result.push(temp);
    } else {
      result.push(0);
    }
  } else {
    list.insert(num);
  }
}

console.log(result.join('\n'));
