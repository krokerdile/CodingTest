function solution(s) {
    var answer = '';
    let list = s.split(" ");
    let newList = list.map((word) => {
        let temp = word.toLowerCase();
        temp = temp.charAt(0).toUpperCase() + temp.slice(1); // 첫 문자 대문자로 변환
        return temp;
    });
    answer = newList.join(" "); // 공백으로 연결하여 문자열로 만듦
    return answer;
}