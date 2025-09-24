
// Arrays

const myArray=[0, 1, 2, 3, 4,]
const favActress=['hania', 'iqra', 'sara']

const myArray2=new Array(1, 2, 3, 4)
console.log(myArray2[1]);

// Array Methods
myArray2.push(8);
myArray2.pop();

myArray2.unshift(10);
myArray2.shift();
console.log(myArray2);

console.log(myArray2.includes(9));
console.log(myArray2.indexOf(3));

const newarray=myArray2.join()
console.log(myArray2);
console.log(typeof newarray);


// +++++++++++Slice and splice+++++++
console.log('A',myArray2);

const myNewArray=myArray2.slice(1,3);
console.log(myNewArray);

console.log('B',myArray2);

const myNewArray2=myArray2.splice(1,3);
console.log('c',myArray2);
console.log(myNewArray2);



