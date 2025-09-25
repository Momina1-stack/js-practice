// singleton
// object.create

// object literals

const mySym = Symbol('hello')
const jsUser={
    name:'momina',
    "full name":"Momina Saleem",
    age:22,
    [mySym]:"heyy",
    location:'Lahore',
    email:"hello.gmail.com",
    isLoggedIn :false,
    lastLoginDay:['monday','saturday'],
}

console.log(jsUser.email);
console.log(jsUser["age"]);
console.log(jsUser["full name"]);
console.log(jsUser[mySym]);

jsUser.email='heyy@gmail.com'
// Object.freeze(jsUser)
jsUser.email='bey@gmail.com'
console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello js users");
}

jsUser.greetingTwo= function(){
    console.log(`hello js users,${this["full name"]}`);
}


console.log(jsUser.greeting());
console.log(jsUser.greetingTwo())
