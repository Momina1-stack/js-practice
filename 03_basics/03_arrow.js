const user={
    username:'momina',
    price: 999,
    welcomeMessage:function(){
        console.log(`${this.username} ,welcome to website`);
        console.log(this);
    }
}
user.welcomeMessage()
user.username=' mona'
user.welcomeMessage()
console.log(this);

function three(){
    let username='momina'
    console.log(this.username);
}
three()
const three=function(){
    let username='momina'
    console.log(this.username);
}

const three= () =>{
    let username='momina'
    console.log(this);
}
three()

// const addTwo= (num1,num2) =>{
//     return num1+num2
// }
console.log(addTwo (3,5));
// implicit return
// const addTwo= (num1,num2) => num1+num2
// const addTwo= (num1,num2) => ( num1+num2 )
const addTwo= (num1,num2) => ({username:'momina'})