// nested function
function one(){
    const username='Momina'
    {
        function two(){
            const website='youtube'
            console.log(username);
        }
        // console.log(website);
        two()
    }
}
one()


// if in scope
if(true){
    const username="momina"
    if(username === 'momina'){
        const website='youtube'
        console.log(username+website);
    }
    console.log(website);
}
console.log(username);


// ++++++++++interesting++++++++++
// basic function
console.log(addone(5));
function addone(num){
    return num+1
}
addone(5)
output is 6 means code execute ho gya hai 
// basic function also called expression
console.log(addTwo());
const addTwo=function(num){
    return num+2
}
/* but expression mein code execute ni hoga agr function ko pehly likh kr declare karwaya jay 
mtlb decleration sy pehly agr function ko access kiya jay tu error ay ga*/ 