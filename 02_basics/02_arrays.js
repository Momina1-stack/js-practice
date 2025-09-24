const grounpOne=['Youmna','laiba','amna'];
const groupTwo=['Maheera','Momina','Asfa'];
// grounpOne.push(groupTwo);
// concat operater
// console.log(grounpOne);
let groups=grounpOne.concat(groupTwo);
console.log(groups);
// spread operater
const newGroup=[...grounpOne,...groupTwo]
console.log(newGroup);

let array=[1,2,3,[0,1,4],4,5,[0,1,2,3,[9,8,7,6]]]
let realArray=array.flat(Infinity);
console.log(realArray);

console.log(Array.isArray('MOMINA'));
console.log(Array.from('MOMINA'));
console.log(Array.from({name:'Momina'}));  /* interesting*/

let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));