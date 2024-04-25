function solution(food) {
    var answer = '';
    let temp = '';
    let list = food.slice(1);
    console.log(list);
    list.map((num,idx)=>{
        temp += (idx+1).toString().repeat(parseInt(num/2));
    })
    console.log(temp);
    answer = temp + '0' + temp.split("").reverse().join("");
    return answer;
}