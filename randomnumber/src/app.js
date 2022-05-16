const numberForm = document.querySelector("#numberGame");
const numberRange = document.querySelector("#numberGame:first-child input");
const userGuess = document.querySelector("#numberGame:last-child input");

const randomNumber = numberRange[Math.floor(Math.random() * numberRange)];

function rangeSubmitted(tomato) {
  tomato.preventDefault();
  const maxRange = numberRange.value;
  // const maxRange = parseInt(numberRange.value);
  console.log("Max range chosen " + maxRange);
}

numberForm.addEventListener("submit", rangeSubmitted);
