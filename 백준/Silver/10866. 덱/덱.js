const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class CustomDeque {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  addFront(item) {
    const newNode = new Node(item);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.size++;
  }

  addRear(item) {
    const newNode = new Node(item);
    if (!this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  removeFront() {
    if (!this.head) return null;
    const value = this.head.value;
    this.head = this.head.next;
    if (this.head) {
      this.head.prev = null;
    } else {
      this.tail = null;
    }
    this.size--;
    return value;
  }

  removeRear() {
    if (!this.tail) return null;
    const value = this.tail.value;
    this.tail = this.tail.prev;
    if (this.tail) {
      this.tail.next = null;
    } else {
      this.head = null;
    }
    this.size--;
    return value;
  }
}

const count = parseInt(input[0]);
const answer = [];

const arrayDeque = new CustomDeque();

for (let i = 1; i < count + 1; i++) {
  let [order, number] = input[i].split(' ');
  switch (order) {
    case 'push_front':
      arrayDeque.addFront(number);
      break;
    case 'push_back':
      arrayDeque.addRear(number);
      break;
    case 'pop_front':
      if (arrayDeque.size == 0) {
        answer.push(-1);
      } else {
        answer.push(arrayDeque.head.value);
        arrayDeque.removeFront();
      }
      break;
    case 'pop_back':
      if (arrayDeque.size == 0) {
        answer.push(-1);
      } else {
        answer.push(arrayDeque.tail.value);
        arrayDeque.removeRear();
      }
      break;
    case 'size':
      answer.push(arrayDeque.size);
      break;
    case 'empty':
      if (arrayDeque.size == 0) {
        answer.push(1);
      } else {
        answer.push(0);
      }
      break;

    case 'front':
      if (arrayDeque.size == 0) {
        answer.push(-1);
      } else {
        answer.push(arrayDeque.head.value);
      }

      break;
    case 'back':
      if (arrayDeque.size == 0) {
        answer.push(-1);
      } else {
        answer.push(arrayDeque.tail.value);
      }
  }
}

console.log(answer.join('\n'));
