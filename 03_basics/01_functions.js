// function addTwoNumbers(number1,number2){
//     console.log(number1+number2);
// }
function addTwoNumbers(number1,number2){
    // two methods of return value
    // No.1
    // let result=(number1+number2);
    // return result
    // no.2
    return number1 + number2
    console.log('hello') 
    // return ky bad kuch bhi print nahi hota
}
const result= addTwoNumbers(3,5)
console.log('Result:' , result);

function loginUserName(username){
    return`${username} just logged in`
}
// console.log(loginUserName('Momina'))
console.log(loginUserName(''))   /*output is 'just logged in' because hmny value empty di hai*/
console.log(loginUserName()) /* output is 'undefine just logged in' because koi value hi nhi di imp for interview */ 

function loginUserName(username){
    if(username === undefined){
        console.log("please enter a username");
        return
    }
        return`${username} just logged in`
} /* output is pleae enter a username*/


function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(100,200,400,3000))

// object method
const user={
    username : 'Momina',
    price:199
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user)
// another way
handleObject({
    username:'mona',
    price:299
})

// array method

const myNewArray=[123,200,300,350]
function returnSecondValue(getArray){
    return getArray[2]
}
console.log(returnSecondValue(myNewArray));
// another way
console.log(returnSecondValue([345,777,666,777]));
