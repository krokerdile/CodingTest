const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

// 개수
let N = parseInt(input[0]);

// 트리 구조를 저장할 객체 (딕셔너리)
let tree = {};

// 트리 데이터 입력
for (let i = 1; i <= N; i++) {
  let [parent, left, right] = input[i].split(' ');
  tree[parent] = [left, right];
}

// 전위 순회 (Preorder)
const preorder = (node) => {
  if (node === '.') return '';
  let [left, right] = tree[node];
  return node + preorder(left) + preorder(right);
};

// 중위 순회 (Inorder)
const inorder = (node) => {
  if (node === '.') return '';
  let [left, right] = tree[node];
  return inorder(left) + node + inorder(right);
};

// 후위 순회 (Postorder)
const postorder = (node) => {
  if (node === '.') return '';
  let [left, right] = tree[node];
  return postorder(left) + postorder(right) + node;
};

// 결과 출력 (A는 항상 루트 노드)
console.log(preorder('A'));
console.log(inorder('A')); 
console.log(postorder('A'));
