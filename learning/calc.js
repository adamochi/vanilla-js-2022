let a = 5
let b = 2

let myName = "adam";

console.log(a + b);
console.log(a * b);

myName = "adamochi";

console.log("your new name is " + myName);

// always const, sometimes let. Never var.


const m = 5
let amIFat = true;

amIFat = false;


// we are not creating the variable, we are updating the varieable


//  TRUE & FALSE are booleans
//  null is an asigned value. when we want to literally say here there is nothing, Nothing IS something.
// undefined is something that has no value (like an empty container), different to null. because null is something.
// To create an array, you just need [] square  brackets
const me = "sexy";
const days = [1, 2, false, true, null, undefined, "text", me];
const toPurchase = ["banana", "tomatoes"]
toPurchase.push("pizza");
console.log(toPurchase[2]);
console.log(toPurchase[1]);
toPurchase[1] = "water";
console.log(toPurchase);