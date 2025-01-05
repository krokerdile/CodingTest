function solution(genres, plays) {
    var answer = [];
    
    let map = new Map();
    
    // 노래별 정보 저장
    genres.forEach((genre,idx)=>{
        map.set(idx, {
            genre:genre, 
            play:plays[idx]
        })
    })
    
    // 장르별 총 재생 횟수 계산
    let genreTotal = new Map();
    genres.forEach((genre, idx) => {
        genreTotal.set(genre, (genreTotal.get(genre) || 0) + plays[idx]);
    });
    
    // 장르를 총 재생 횟수 기준으로 정렬
    let sortedGenres = [...genreTotal.entries()]
        .sort((a, b) => b[1] - a[1])
        .map(genre => genre[0]);
    
    sortedGenres.forEach((genre) => {
        // 해당 장르의 노래들만 필터링하고 재생 횟수로 정렬
        let genreSongs = [...map.entries()]
            .filter(([key, value]) => value.genre === genre)
            .sort((a, b) => b[1].play - a[1].play);
        
        // 상위 2개만 결과에 추가
        genreSongs.slice(0, 2).forEach(([key]) => {
            answer.push(key);
        });
    });
    
    return answer;
}