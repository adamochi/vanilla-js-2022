const numberForm = document.querySelector("#numberGame");
const numberRange = document.querySelector("#numberGame .range");
const userGuess = document.querySelector("#numberGame .guess");
const youChose = document.querySelector(".you-chose");
const machineChose = document.querySelector(".machine-chose");
const randomDisplay = document.querySelector(".random-number");
const winDisplay = document.querySelector(".hidden");
const loseDisplay = document.querySelector(".hidden-lose");

if (localStorage !== null) {
  localStorage.clear();
}

const myMegaSexyRandomHandler = {
  rangeSubmitted: function (event) {
    event.preventDefault();
    const maxRange = numberRange.value;
    localStorage.setItem("maxRange", maxRange);
    return maxRange;
  },
  guessSubmitted: function (event) {
    const guessedNumber = userGuess.value;
    localStorage.setItem("guessedNumber", guessedNumber);
    youChose.innerText = "You Chose: " + guessedNumber;
    return guessedNumber;
  },
  randomNumberfun: function (event) {
    const randomNumber = Math.floor(Math.random() * numberRange.value);
    localStorage.setItem("randomNumber", randomNumber);
    randomDisplay.innerText = "The Number is: " + randomNumber;
    return randomNumber;
  },
  machineChoice: function (event) {
    const aiChoice = Math.floor(Math.random() * numberRange.value);
    localStorage.setItem("aiChoice", aiChoice);
    machineChose.innerText = "The Machine Chose: " + aiChoice;
    return aiChoice;
  },
};

numberForm.addEventListener("submit", myMegaSexyRandomHandler.rangeSubmitted);
numberForm.addEventListener("submit", myMegaSexyRandomHandler.randomNumberfun);
numberForm.addEventListener("submit", myMegaSexyRandomHandler.guessSubmitted);
numberForm.addEventListener("submit", myMegaSexyRandomHandler.machineChoice);

const maxRangeResult = localStorage.getItem("maxRange");

function playIt() {
  const maxRange = localStorage.getItem("maxRange");
  const randomNumber = localStorage.getItem("randomNumber");
  const guessedNumber = localStorage.getItem("guessedNumber");
  const aiChoice = localStorage.getItem("aiChoice");
  //   console.log(maxRange, randomNumber, guessedNumber, aiChoice);
  if (guessedNumber === randomNumber && aiChoice === randomNumber) {
    console.log("double winners");
  } else if (guessedNumber === randomNumber) {
    console.log("winna");
    winDisplay.classList.remove("hidden");
    loseDisplay.classList.add("hidden-lose");
  } else if (aiChoice === randomNumber) {
    console.log("loser");
    winDisplay.classList.add("hidden");
    loseDisplay.classList.remove("hidden-lose");
  } else if (guessedNumber !== randomNumber) {
    console.log("keep partying");
    loseDisplay.classList.add("hidden-lose");
    winDisplay.classList.add("hidden");
  } else if (aiChoice !== randomNumber) {
    loseDisplay.classList.add("hidden-lose");
  }
}

numberForm.addEventListener("submit", playIt);
//   if (guessedNumber === randomNumbe && guessedNumber !== randomNumber) {
//     winDisplay.classList.remove("hidden");
//   } else if (aiChoice === randomNumber) {
//     loseDisplay.classList.remove("hidden-lose");
//   } else {
//     winDisplay.classList.add("hidden");
//     loseDisplay.classList.add("hidden-lose");
//   }
// }

/*
function rangeSubmitted(event) {
  event.preventDefault();
  const maxRange = parseInt(numberRange.value);
  // const maxRange = parseInt(numberRange.value);
  console.log("Max range chosen " + maxRange);
}
function guessSubmitted(event) {
  event.preventDefault();

  const guessedNumber = parseInt(userGuess.value);
  console.log("You Chose: " + guessedNumber);
}
function randomNumberfun(event) {
  event.preventDefault();
  const randomNumber = Math.floor(Math.random() * numberRange.value);
  console.log(randomNumber);
}
function machineChoice(event) {
  event.preventDefault();
  const aiChoice = Math.floor(Math.random() * numberRange.value);
  console.log("the machine chose " + aiChoice);
}
function didYouWin (event) {
    if (guessedNumber === randomNumber) {
        console.log("you win");
    } else (aiChoice === randomNumber) {
        console.log("you lose")
    }
}
*/
