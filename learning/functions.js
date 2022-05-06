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
function banana() {
    console.log("ban" + "ana");
}

// recap ii 
// need to add () to press play on the function
banana();
banana();
banana();
banana();
banana();
banana();
banana();
plus();
plus();
plus();
plus();
plus();
plus();


// we leart how to send data to functions before we learned how to receive data from functions

// need to be able to send data to functions
plus(4, 5);
plus(987.99, 203);

const calculator = {
    add: function (a, b) {
    console.log(a + b);
},  minus: function (a, b) {
    console.log(a - b);
},  divide: function (a, b) {
    console.log(a / b);
},  power: function (a, b) {
    console.log(a**b);
}
};

calculator.add(5, 100);
calculator.minus(100, 70);
calculator.divide(5, 10);
calculator.power(645, 3);
