function solution(nums) {
    
    let list = {};
    nums.map((x)=>list[x] = x)
    console.log(list);
    console.log(Object.keys(list).length);
    let temp = Object.keys(list).length;

    while(1){
        if(nums.length / 2 >= temp ){
            break;
         }
        temp -= 1;
    }

    return temp;
}