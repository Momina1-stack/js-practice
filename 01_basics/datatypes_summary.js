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