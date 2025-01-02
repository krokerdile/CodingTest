const readline = require('readline');

class PriorityQueue {
    constructor(comparator = (a, b) => a - b) {
        this.values = [];
        this.comparator = comparator;
    }

    parent(index) {
        return Math.floor((index - 1) / 2);
    }

    leftChild(index) {
        return 2 * index + 1;
    }

    rightChild(index) {
        return 2 * index + 2;
    }

    push(element) {
        this.values.push(element);
        this.bubbleUp(this.values.length - 1);
    }

    pop() {
        if (this.values.length === 0) return null;
        if (this.values.length === 1) return this.values.pop();

        const result = this.values[0];
        const last = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = last;
            this.bubbleDown(0);
        }
        return result;
    }

    peek() {
        return this.values[0] || null;
    }

    bubbleUp(index) {
        while (index > 0) {
            const parentIndex = this.parent(index);
            if (this.comparator(this.values[parentIndex], this.values[index]) <= 0) break;
            [this.values[index], this.values[parentIndex]] = [this.values[parentIndex], this.values[index]];
            index = parentIndex;
        }
    }

    bubbleDown(index) {
        while (true) {
            let minIndex = index;
            const leftIndex = this.leftChild(index);
            const rightIndex = this.rightChild(index);

            if (leftIndex < this.values.length && 
                this.comparator(this.values[leftIndex], this.values[minIndex]) < 0) {
                minIndex = leftIndex;
            }
            if (rightIndex < this.values.length && 
                this.comparator(this.values[rightIndex], this.values[minIndex]) < 0) {
                minIndex = rightIndex;
            }

            if (minIndex === index) break;
            [this.values[index], this.values[minIndex]] = [this.values[minIndex], this.values[index]];
            index = minIndex;
        }
    }

    size() {
        return this.values.length;
    }
}

function findMedians(numbers) {
    const results = [];
    // 최대 힙과 최소 힙 초기화
    const maxHeap = new PriorityQueue((a, b) => b - a); // 작은 수들을 저장
    const minHeap = new PriorityQueue((a, b) => a - b); // 큰 수들을 저장

    for (let i = 0; i < numbers.length; i++) {
        const num = numbers[i];
        
        // 힙에 숫자 추가
        if (maxHeap.size() === 0 || maxHeap.peek() >= num) {
            maxHeap.push(num);
        } else {
            minHeap.push(num);
        }

        // 힙 크기 조절
        if (maxHeap.size() > minHeap.size() + 1) {
            minHeap.push(maxHeap.pop());
        } else if (maxHeap.size() < minHeap.size()) {
            maxHeap.push(minHeap.pop());
        }

        // 홀수 번째 수일 때 중앙값 계산
        if ((i + 1) % 2 === 1) {
            results.push(maxHeap.peek());
        }
    }

    return results;
}

async function main() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const lines = [];
    
    for await (const line of rl) {
        lines.push(line);
    }

    let currentLine = 0;
    const T = parseInt(lines[currentLine++]); // 테스트 케이스 개수

    for (let t = 0; t < T; t++) {
        const M = parseInt(lines[currentLine++]); // 수열의 크기
        const numbers = [];

        // 수열 입력 받기
        while (numbers.length < M) {
            numbers.push(...lines[currentLine++].split(' ').map(Number));
        }

        // 중앙값 계산
        const medians = findMedians(numbers);

        // 결과 출력
        console.log(medians.length);

        // 10개씩 나누어 출력
        for (let i = 0; i < medians.length; i += 10) {
            console.log(medians.slice(i, i + 10).join(' '));
        }
    }

    rl.close();
}

main();