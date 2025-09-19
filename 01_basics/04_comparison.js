
// these type of conversions are confusing

console.log(null>0);      false
console.log(null == 0);    false
// console.log (null >= 0);    true(the reason is that an equality check== and comparison > < >= <= work differently)
// // comparison convert null to a number , treating it as 0 thats why (3) null >=0 is false
// comparison and equality check both are different
console.log(undefined == 0);  false
console.log(undefined > 0);   false
console.log(undefined < 0);  false

// ===
console.log("2" === 2;)