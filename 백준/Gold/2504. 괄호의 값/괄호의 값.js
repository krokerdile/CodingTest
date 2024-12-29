const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

function calculateBracketValue(input) {
  const stack = [];

  for (let i = 0; i < input.length; i++) {
    const char = input[i];

    if (char === '(' || char === '[') {
      // 여는 괄호는 스택에 추가
      stack.push(char);
    } else {
      // 닫는 괄호 처리
      if (stack.length === 0) return 0; // 스택이 비어있으면 올바르지 않은 괄호열

      if (char === ')') {
        let value = 0;

        // 직전 괄호가 여는 괄호인 경우
        if (stack[stack.length - 1] === '(') {
          stack.pop();
          stack.push(2);
        } else {
          // 괄호 안에 다른 값들이 있는 경우
          let tempSum = 0;

          while (stack.length > 0 && typeof stack[stack.length - 1] === 'number') {
            tempSum += stack.pop();
          }

          if (stack.length === 0 || stack[stack.length - 1] !== '(') {
            return 0; // 올바르지 않은 괄호열
          }

          stack.pop(); // '(' 제거
          stack.push(tempSum * 2); // 결과값 푸시
        }
      } else if (char === ']') {
        let value = 0;

        // 직전 괄호가 여는 괄호인 경우
        if (stack[stack.length - 1] === '[') {
          stack.pop();
          stack.push(3);
        } else {
          // 괄호 안에 다른 값들이 있는 경우
          let tempSum = 0;

          while (stack.length > 0 && typeof stack[stack.length - 1] === 'number') {
            tempSum += stack.pop();
          }

          if (stack.length === 0 || stack[stack.length - 1] !== '[') {
            return 0; // 올바르지 않은 괄호열
          }

          stack.pop(); // '[' 제거
          stack.push(tempSum * 3); // 결과값 푸시
        }
      }

      // 연속된 숫자들을 하나로 합치기
      if (
        stack.length >= 2 &&
        typeof stack[stack.length - 1] === 'number' &&
        typeof stack[stack.length - 2] === 'number'
      ) {
        const num1 = stack.pop();
        const num2 = stack.pop();
        stack.push(num1 + num2);
      }
    }
  }

  // 최종 검사
  if (stack.length !== 1 || typeof stack[0] !== 'number') {
    return 0; // 올바르지 않은 괄호열
  }

  return stack[0];
}

// 테스트
console.log(calculateBracketValue(input[0])); // 28
