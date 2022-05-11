// We use functions to encapsulate a piece of code
function sayHello(nameOfPeron, age) {
  console.log("Hello my name is " + nameOfPeron + " and I'm " + age);
}
// To run a function use () parentheses
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
// plus is not readily accessible variable until you put inside of the {body} of the function. it will say not defined.
const playa = {
  name: "adam",
  sayHelloo: function (otherPersonsName) {
    console.log("hello " + otherPersonsName + " nice to meet you");
  },
};

console.log(playa.name);
playa.sayHelloo("chloe");

// ^^ have own console.log() | array.push() ^^
function banana() {
  console.log("ban" + "ana" + " party");
}

// recap ii
// need to add () to press play on the function
banana(); // argument goes here);
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
plus(987.99, 202.01);

const calculator = {
  add: function (a, b) {
    //  console.log(a + b);
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  times: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  },
  power: function (a, b) {
    return a ** b;
  },
};
// RETURN - I want the my function to give me the result of the function in the code.
// The value of console.log and alert is an UNDEFINED value. Return has a value. So that's how you get a result.
calculator.add(5, 100);
calculator.minus(100, 70);
calculator.divide(5, 10);
calculator.power(645, 3);
// what is the value of plus. after plessing play on the plus function, what is the value?
// The actual value is undefined
console.log(calculator.add(3, 5)); // <-- undefined
// The thing is we didn't return the value
// To get the result and use it in my code need to use return.
let foreignerAge = 96;
function calculateKrAge(ageOfForeigner) {
  return foreignerAge + 2;
}
// what you are doing is now when someone presses play to the function, you are replacing the line after = with the result of it
const krAge = calculateKrAge(foreignerAge);
console.log(krAge);
// This is how the function communicates with the outside world

// you are not going to be console logging all the time

const plusResult = calculator.add(321, 123);
// when you call a function, that function has a return value.
// you actually want to get the value out of the function then you can do whatever you want
// We could get a resuly in the console log but we could not get an actual value! It showed it to be undefined. Our code couldn't get a result from it.
console.log(plusResult);
const minusResult = calculator.minus(plusResult, 222);
const timesResult = calculator.times(10, minusResult);
const divideResult = calculator.divide(timesResult, 100);
const powerResult = calculator.power(divideResult, minusResult);

console.log(minusResult, powerResult, timesResult, divideResult);
// I have acces to all these results because our functions will return something

function potat(a, b, c, d, e, f) {
  return "you requested " + a + b + c + d + e + f;
}

potat("kimchi ", "to ", "be ", "put ", "on the ", "BBQ");

console.log(potat());

// null stands for nothingness but is something we are going to literally say here there is nothing, and nothing is something

// undefined is when you don't give any values to a constant or let

// to make an array, all you need to write is[]
const months = ["jan", "feb"];
months.push("mar");
console.log(months);
console.log(months[1]);
months[1] = "february"; // this will  replace a value
console.log(months);
// push will add a value
// how many arguments a function can receive can be zero. The maximum number of arguments (and corresponding parameters) is 253 for a single function.

// AFTER RETURNING A VALUE, YOUR FUNCTION FINISHES, if if write console.log() after the return, it will not show anything in the console. anything after return will never run.
