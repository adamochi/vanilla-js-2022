// const title = document.querySelector("div.hello:first-child h1");

// console.dir(title);

// function handleTitleClick() {
//   title.style.color = "blue";
// }

// function handleMouseEnter() {
//   title.innerText = "mouse is here!";
//   title.style.color = "aqua";
// }

// function handleMouseLeave() {
//   title.innerText = "mouse is gone!";
//   title.style.color = "yellowgreen";
//   console.log("mouse is gone!");
// }

// function handleResize() {
//   title.innerText = "you just resized!";
//   title.style.color = "deeppink";
// }

// function handleRightClick() {
//   title.innerText = "that was a right click!";
//   title.style.color = "teal";
// }

// title.addEventListener("click", handleTitleClick);
// title.addEventListener("mouseenter", handleMouseEnter);
// title.addEventListener("mouseleave", handleMouseLeave);
// window.addEventListener("resize", handleResize);
// document.addEventListener("contextmenu", handleRightClick);

const title = document.querySelector("div.hello:first-child h1");
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

const superEventHandler = {
  handleTitleClick: function () {
    title.style.color = colors[0];
    document.title = "Awesome is activated";
  },
  handleMouseEnter: function () {
    title.innerText = "mouse is here!";
    title.style.color = colors[1];
  },
  handleMouseLeave: function () {
    title.innerText = "mouse is gone!";
    title.style.color = colors[2];
  },
  handleResize: function () {
    title.innerText = "you just resized!";
    title.style.color = colors[3];
  },
  handleRightClick: function () {
    title.innerText = "Nice! That was a right click!";
    title.style.color = colors[4];
  },
};

title.addEventListener("click", superEventHandler.handleTitleClick);
title.addEventListener("mouseenter", superEventHandler.handleMouseEnter);
title.addEventListener("mouseleave", superEventHandler.handleMouseLeave);
window.addEventListener("resize", superEventHandler.handleResize);
document.addEventListener("contextmenu", superEventHandler.handleRightClick);

// The reason for using addEventListener instead of writing title.onclick = handleTitleClick; IS so that later I can use .removeEventListener later
