function solution(arr1, arr2) {
    var answer = [[]];
    console.log(typeof(answer[0]))
    arr1.map((line,idx1)=>{
        line.map((item,idx2)=>{
           arr2[idx1][idx2] += item;
        })
    })
    answer = arr2;
    return answer;
}