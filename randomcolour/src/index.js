const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34",
];
const colourButton = document.querySelector("body button");
const theBody = document.querySelector(".potato");
const style = document.querySelector(".potato style");

/* how i found the body's colour
 *
 *   console.dir(theBody);
 *   theBody.bgColor = "red"; it worked! but not for gradient...
 *
 *
console.dir(theBody);
console.log(style.innerText);
*/

function handleBgColour() {
  const ColourOne = colors[Math.floor(Math.random() * colors.length)];
  const ColourTwo = colors[Math.floor(Math.random() * colors.length)];
  //   console.log(ColourOne, ColourTwo);
  style.innerText = `.potato { background-image: linear-gradient(to right,${ColourOne}, ${ColourTwo})};`;
  //   console.log(style.innerText);
}
colourButton.addEventListener("click", handleBgColour);
