function dfs(k,dungeons,visit,index,answer,resultArr){

    for(let a=0;a<dungeons.length;a++){
        if((!visit[a])&&(k>=dungeons[a][0])){   
            visit[a]=true;
            k-=dungeons[a][1];

            resultArr.push(answer+1);
           dfs(k,dungeons,visit,a+1,answer+1,resultArr);

            visit[a]=false;
            k+=dungeons[a][1];

        }
    }


}
function solution(k, dungeons) {
    var answer = 0;
    let index=0;
    const resultArr=[];
    const visit=Array(dungeons.length).fill(false);

    dfs(k,dungeons,visit,index,answer,resultArr);
  answer= Math.max(...resultArr);

    return answer;
}