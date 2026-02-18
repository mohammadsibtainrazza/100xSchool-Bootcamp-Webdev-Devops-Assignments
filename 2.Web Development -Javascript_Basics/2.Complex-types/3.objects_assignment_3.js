function greetandVote(users) {
    let voteOder=". You can vote";
    if (users.age<18){
        voteOder=". You cannot vote"
    } 
    if(users.gender=="Male"){
        console.log("Hi Mr."+users.name+", Your age is "+users.age+voteOder);
    }
    else if(users.gender=="Female"){
        console.log("Hi Mrs."+users.name+", Your age is "+users.age+voteOder);}
    else {console.log("Hi "+users.name+", Your age is "+users.age+voteOder);
    }
}

let user1={
    name:"Raza",
    age: 23,
    gender:"Male"
}

let user2={
    name:"Zoe",
    age: 12,
    gender:"Female"
}

let user3={
    name:"Justin",
    age: 30,
    gender:"Others"
}

greetandVote(user1);
greetandVote(user2);
greetandVote(user3);