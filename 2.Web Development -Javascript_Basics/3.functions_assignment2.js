function canVote(age) {
    if(age>=18){
        return true;
    }
    else return false;    
}



let vote=canVote(12);
console.log(vote);
