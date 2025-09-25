// const tinderUser= new Object()
const tinderUser ={}

tinderUser.id= '345rrr'
tinderUser.name='mishi'
tinderUser.isLoggedIn=false
console.log(tinderUser);

let regularser={
    email:'mominasalim@gmail.com',
    fullname:{
        userfullname:{
            firstname:'Momina',
            lastname:'Saleem'
        }
    }
}
console.log(regularser.fullname.userfullname);

const obj1={1:'a' , 2:'b' }
const obj2 ={3:'c' , 4:'d'}
const obj3=Object.assign({}, obj1 ,obj2)
// console.log(obj3);
// spread operater
let obj4={...obj1 , ...obj2}
console.log(obj3);

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('LoggedIn'));

const course={
    coursename:'practice of js',
    price:'free',
    courseinstructor:'hitesh',
}
const {courseinstructor : instructor}=course
// console.log(courseinstructor);
console.log(instructor)