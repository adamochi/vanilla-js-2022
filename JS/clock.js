const clock = document.querySelector(".js-clock");

// function sayHello() {
//   console.log("hello");
// }
// setInterval(sayHello, 1000);
// new Date();
// setTimeout(sayHello, 1000);
function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;

  //   clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}
getClock();
setInterval(getClock, 1000);
// This is what makes it look real-time

// The Date() object has many functions and use set interval

// problem here is that single digits look bad on our clock! If you get a problem, you can be sure that other developers have had your problem, and there is most likely a function that will handle your problem

// "1".padStart(2, "0");
// "1".padStart(2, "0");

// "1".padEnd(2, "0");
// "hello".padStart(20, "x");
// cant do date.getHours().padStart because it is a number and we need a string
// so use String()
