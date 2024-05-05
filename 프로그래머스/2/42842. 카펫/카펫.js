function solution(brown, yellow) {
    var answer = [];
    let height = 2;
    let width = brown/2;
    let result = -1;
    while(result!==0){
        height++;
        width--;
        let mul = height*width;
        result = mul - brown - yellow;
    }
    return [width,height];
}