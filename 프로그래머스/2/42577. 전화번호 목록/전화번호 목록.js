function solution(phone_book) {
    var answer = true;
    
    phone_book = phone_book.sort();
    
    for(let j=0; j<phone_book.length-1; j++){
         if( phone_book[j+1].startsWith(phone_book[j])){
            return false;
         }
    }
    
    return answer;
}