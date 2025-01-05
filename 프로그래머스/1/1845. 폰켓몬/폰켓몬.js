function solution(nums) {
    var answer = 0;
    
    let numSet = new Set(nums);
    
    let half = parseInt(nums.length/2);
    
    const array = [...numSet];
    
    answer = half < array.length ? half : array.length;
    
    return answer;
}