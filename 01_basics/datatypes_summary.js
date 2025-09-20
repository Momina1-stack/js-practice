// primitive
// 7 types
// String,Number,Boolean,undefined,null,symbol,BigInt

const score=100
const scoreValue=100.5

const isLoggedIn=false
const outSideTemp=null
let userEmail;

const id= Symbol("123")
const anotherId=Symbol("123")
console.log(id===anotherId);

const bigNumber=12334556n

// non-primitive/Refrence type (all non-primitive data types return object)
// arrays,objects,functions

const girls=["Maheera","youmna","laiba"]
let myObj={
    name: Maheera,
    age: 22,
}


const myFunction = function(){
    console.log("hello world")
}
// function datatypes returns object function



// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// stack and heap memory
// stack(primitive memory), heap(non-primitive memory)

let myYoutubeName = "hello@google.com"
let anotherName= myYoutubeName
anotherName="helloworld@gmail.com"
console.log(myYoutubeName);
console.log(anotherName);


let userOne={
    email:"www@gmail.com"
    upi: "user@ybl"
}
let userTwo=userOne

userTwo.email="hiwww@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);


//datatypes are based on memory allocation
// Primitive datatypes->  call by value (string,number,boolean,null,undefined,BigInt,symbol) ->Stack memory

// Reference/Non primitive data types -> call by reference ( array,object, function) -> heap memory

// JavaScript is a dynamically typed language. This means that you don't need to specify the data type of a variable when you declare it.