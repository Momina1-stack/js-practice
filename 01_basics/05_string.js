const name='momina';
const repoCount=50;
console.log(name + repoCount+" value");
console.log(`Hello my name is ${name} and my repo count is ${50}`);

let newStyle=new String('helloworld')
console.log(newStyle);
console.log(newStyle.length);
console.log(newStyle.toUpperCase());
console.log(newStyle.charAt(4));
console.log(newStyle.indexOf('e'));

let newString=newStyle.substring(1,3)
console.log(newString);
let anotherString=newStyle.slice(-10,4)
console.log(anotherString);

let stringOne="   momina   "
console.log(stringOne);
console.log(stringOne.trim());

let longString="Hello my name is MOMINA "
console.log(longString.replace("hello my name","hey i am "));
 let url="www.momina/hello.com"
 console.log(url.replace("hello","saleem"));

 console.log(longString.includes("is MOMINA"));
 console.log(longString.split(","));
 console.log(longString);