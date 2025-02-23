class MaxHeap { //클래스 생성
    #tree;
    #size;
 
    constructor() { //생성자
        this.#tree = []; //힙 배열
        this.#tree.push(null); //첫번째 요소 제외
        this.#size = 0;
    }
    push(e){ //삽입
        this.#tree.push(e);
        this.#size++;
        if(this.#size == 1)
            return;
        this.#shift_up(this.#tree.length - 1); //삽입된 마지막 요소 인자로 넘겨줌
    }
    #shift_up(index) { //넘겨받은 인자를 index로 하여
        let parent = Math.floor(index / 2); //부모 인덱스
        if(parent == 0) //부모 인덱스가 0이면 끝
            return;
        if(this.#tree[index] > this.#tree[parent]){ //부모가 더 작으면 교환
            let temp = this.#tree[parent]; //빈 변수에 부모 값 저장
            this.#tree[parent] = this.#tree[index]; //부모 노드에 자식 노드 값 저장
            this.#tree[index] = temp; //자식 노드에 부모 값 저장
            this.#shift_up(parent); //재귀로 반복
        }
    }
    pop(){ //삭제
        if(this.#size == 0) //삭제할 게 없으면
            return 0; //0반환
        let element = this.#tree[1]; //인덱스 1의 요소 지정 
        if(this.#size > 1) //배열이 1보다 크면 - 자식 노드가 있으면 
            this.#tree[1] = this.#tree.pop(); //마지막 자식 노드 pop해서 루트로 올려줌
        else
            this.#tree.pop(); //자식 노드 없으면 그대로 pop
        this.#size--;
        this.#shift_down(1); //루트 노드 인자로 넘겨줌
        return element;
    }
    #shift_down(index){
        let lchild = this.#tree[index * 2] == undefined ? index : index * 2; //왼쪽 자식 노드 - 존재하지 않으면 1, 아니면 지정
        let rchild = this.#tree[index * 2 + 1] == undefined ? index : index * 2 + 1; //오른쪽 자식 노드
        let bigger_child = this.#tree[lchild] > this.#tree[rchild] ? lchild : rchild; //자식 노드 크기 비교 
 
        if(this.#tree[index] < this.#tree[bigger_child]){ //루트 노드가 큰 자식 노드보다 작으면
            let temp = this.#tree[bigger_child]; //빈 변수에 큰 자식 노드 값 저장
            this.#tree[bigger_child] = this.#tree[index]; //큰 자식 노드에 부모 노드 값 저장 - 교환
            this.#tree[index] = temp; //부모 노드에 자식 노드 값 저장
            this.#shift_down(bigger_child); //재귀로 반복
        }
    }
}
 
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
 
input.shift();
let result = "";
let heap = new MaxHeap();
input.forEach(e =>{
    let n = parseInt(e);
    if(n == 0)
        result += heap.pop() + "\n";
    else
        heap.push(n);
})
console.log(result);