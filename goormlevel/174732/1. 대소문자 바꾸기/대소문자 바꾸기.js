// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let a = [];
	for await (const line of rl) {
		a.push(line);
		rl.close();
	}
	
	function isUpperCase(str) {
  return str === str.toUpperCase();
	}

// 소문자인지 확인하는 함수 작성
function isLowerCase(str) {
  return str === str.toLowerCase();
}
	
	let word = a[1].split("");
	
	for(let i=0; i<a[0]; i++){
		if(!isUpperCase(word[i])){
			word[i] = word[i].toUpperCase();
		}else{
			word[i] = word[i].toLowerCase();
		}
	}
	console.log(word.toString().split(",").join(""));
	process.exit();
})();
