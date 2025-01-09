class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(value) {
        this.heap.push(value);
        this.bubbleUp();
    }

    pop() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return min;
    }

    bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex] <= this.heap[index]) break;
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }

    bubbleDown() {
        let index = 0;
        while (true) {
            let smallest = index;
            const leftChild = 2 * index + 1;
            const rightChild = 2 * index + 2;

            if (leftChild < this.heap.length && this.heap[leftChild] < this.heap[smallest]) {
                smallest = leftChild;
            }
            if (rightChild < this.heap.length && this.heap[rightChild] < this.heap[smallest]) {
                smallest = rightChild;
            }

            if (smallest === index) break;

            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            index = smallest;
        }
    }

    size() {
        return this.heap.length;
    }
}

function solution(scoville, K) {
    const minHeap = new MinHeap();
    
    // 모든 스코빌 지수를 힙에 넣기
    for (const value of scoville) {
        minHeap.push(value);
    }
    
    let mixCount = 0;
    
    // 가장 작은 스코빌 지수가 K보다 작은 동안 반복
    while (minHeap.size() >= 2 && minHeap.heap[0] < K) {
        // 가장 맵지 않은 두 음식 꺼내기
        const first = minHeap.pop();
        const second = minHeap.pop();
        
        // 새로운 음식의 스코빌 지수 계산
        const newScoville = first + (second * 2);
        
        // 새로운 음식을 힙에 넣기
        minHeap.push(newScoville);
        mixCount++;
    }
    
    // 모든 음식의 스코빌 지수가 K 이상인지 확인
    return minHeap.heap[0] >= K ? mixCount : -1;
}