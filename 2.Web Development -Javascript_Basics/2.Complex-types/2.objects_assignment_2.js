function greetWithGender(users) {
    if(users.gender=="Male"){
        console.log("Hi Mr."+users.name+", Your age is "+users.age);}
    else if(users.gender=="Female"){
        console.log("Hi Mrs."+users.name+", Your age is "+users.age);}
    else {console.log("Hi "+users.name+", Your age is "+users.age);
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


greetWithGender(user1);
greetWithGender(user2);
greetWithGender(user3);