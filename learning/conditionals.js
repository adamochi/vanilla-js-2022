// age calculator if else, can i drink or not

// const age = prompt("how old are you?");
// javascript is basically paused because of this, and is one of the reasons we don't use prompt anymore. it's a very old way to get a value.

const age = parseInt(prompt("how old are you?"));

// how to take one type and turn it into another. string to integer

console.log(typeof age);
// it is just default that it is a string.
console.log(typeof "15", typeof parseInt("15"));
console.log(age, parseInt(age));
// we cannot check if a string number is more or less than something, this will allow us to have a number

// console.log(isNaN(age));
// if (isNaN(age)) {
//   console.log("please write a real number");
// } else {
//   console.log("thanks for writing your age");
// }
// this is how conditionals work, super simple. Could make this code a bit better. In your programming life you are mostly going to have more than one if.
//   && means both conditions should be met
//   || means or, so only one of them needs to be true
//   !== is not!
console.log(isNaN(age));

if (isNaN(age) || age < 0) {
  console.log("please write a real positive number");
} else if (age < 18) {
  console.log("You are too young");
} else if (age >= 18 && age <= 50) {
  console.log("You can drink");
} else if (age > 50 && age < 80) {
  console.log("You should work out");
} else if (age === 100) {
  console.log("wow you are wise");
} else if (age >= 80) {
  console.log("You can do whatever you want");
}
// if you use === to check for literal equality, you will get the > 80 result because the conditions overlap. So move the condition of === 100 up.

// can compound conditionals and make as complex as you want:
// if ((a && b) || (a && b) || (a && b)) {}
