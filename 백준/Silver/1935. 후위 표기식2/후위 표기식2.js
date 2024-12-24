const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = parseInt(input[0]); // 피연산자 개수
const expression = input[1]; // 후위 표기식
let operandValues = new Map();

// 각 피연산자에 대응하는 값을 맵에 저장
for (let i = 0; i < N; i++) {
  const operand = String.fromCharCode(65 + i); // A부터 순서대로
  operandValues.set(operand, parseFloat(input[i + 2]));
}

const result = evaluatePostfix(expression);
console.log(result.toFixed(2));

function evaluatePostfix(expression) {
  const stack = [];

  for (let char of expression) {
    if (isOperator(char)) {
      const b = stack.pop();
      const a = stack.pop();
      const result = calculate(a, b, char);
      stack.push(result);
    } else {
      // 피연산자인 경우 해당하는 값을 스택에 푸시
      stack.push(operandValues.get(char));
    }
  }

  return stack[0];
}

function isOperator(char) {
  return char === '+' || char === '-' || char === '*' || char === '/';
}

function calculate(a, b, operator) {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return a / b;
    default:
      throw new Error('Invalid operator');
  }
}
