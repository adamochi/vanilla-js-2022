function sayHello(nameOfPeron, age) {
    console.log("Hello my name is " + nameOfPeron + " and I'm " + age);
}

sayHello("adam", 34);
sayHello("chloe", 14);


function plus(firstNumber, secondNumber) {
    console.log(firstNumber + secondNumber);
}
function divide(a, b) {
    console.log(a / b);
}
plus(8, 60);
divide(98, 20);

const playa = {
    name: "adam",
    sayHelloo: function (otherPersonsName){
        console.log("hello " + otherPersonsName + " nice to meet you");
    }
}

console.log(playa.name);
playa.sayHelloo("chloe");

// ^^ have own console.log() | array.push() ^^
