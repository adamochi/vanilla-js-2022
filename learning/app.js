// const days = ["mon", "tue", "wed", "thu", "fri", "sat"];

// console.log(days);
// // get item from array
// console.log(days[4]);
// // write the name of the variable then use square bracket to select the item,
// days.push("sun");
// console.log(days);
// const dayy = ["potato", "nana"];

// const title = document.getElementById("title");

// console.dir(title);
// title.innerText = "Got you!";
// console.log(title.id);
// console.log(title.className);

// // To read html from js, we use document which has one function
// // getElementById
// // we will be getting the username and saying hello to the user
// // whatever is on the html like elements, classname, id, innertext,autofocus, and you can change them with javascript.

// const hellos = document.getElementsByClassName("hello");
// console.log(hellos);
// const tittle = document.getElementsByTagName("h1");
// const tiitle = document.querySelector(".hello h1");
// console.log(tiitle);
// console.log(tittle);
// // querrySelector only grabs the first element
// const ttitle = document.querySelectorAll(".hello h1");
// console.log(ttitle);
// // querry selector allows you to use a CSS selector! so write it like: .someting
// // can't get for example "(.hello h1)" with getElementById
// title.innerText = "click me!";
// // querySelector is the best one that allows you to get all the elements, just like css.

// //  style of the element written in js
// // title.style.color = "blue";

// // most of the time in js you will be listening for events. like when i disconnect from the wifi or the user clicks on something.
// function handleTitleClick() {
//   title.style.color = "blue";
// }
// // don't want the functin to happen immediately so i will give the functin to the eventListener and it will handle the event. js will
// title.addEventListener("click", handleTitleClick);
// //we are specifying what event to run
// // web api are the javascript -->
// // HTMLHeadingElement mdn
const h1 = document.querySelector("div.hello:first-child h1");
// -----------------------------------------------------
// function handleHeaderClick() {
//   const currentColour = h1.style.color;
//   let newColour;
//   if (currentColour === "blue") {
//     newColour = "tomato";
//   } else {
//     newColour = "blue";
//   }
//   h1.style.color = newColour;
// }
// title.addEventListener("click", handleHeaderClick);

// the right tool for styles is css, the right tool for animations is javascript.
/*---------------------------------------------------------
function handleThisClick() {
  const activeClassName = "active";
//   if (h1.className === activeClassName) {
//    h1.className = "";
  if (h1.classList.contains(activeClassName)) {
    h1.classList.remove(activeClassName);
  } else {
//     h1.className = activeClassName;
    h1.classList.add(activeClassName);
  }
}*/
//this has introduced a BUG, if the element(h1) has a class already,,, this will REPLACE it! And even setting both class names, whenever you update the html you need to also update everywhere! Want to keep and only clicked class without deleting
// SO there is classList, we can use instead of className and we can do different things. like contains(see if element contains)
// h1.className is A GETTER AND A SETTER!
//
// we are writing the class name 'active' twice and has a high possibility of getting a spelling mistake. it's a raw value that the programmer chose to write, SO make a const.

// one of the things that make our lives easier is 'toggle'. toggle will check that a class name exists. it basically implements this code we just created.
const rain = document.querySelector("a");
const body = document.querySelector("body");
const asdf = document.getElementsByTagName("a");
console.dir(asdf);
function handleThisClick() {
  h1.classList.toggle("active");
  rain.classList.toggle("active");
}

function windowSizer() {
  const intFrameWidth = window.innerWidth;
  if (intFrameWidth < 600) {
    body.className = "small";
  } else if (intFrameWidth > 600 && intFrameWidth < 700) {
    body.className = "medium";
  } else if (intFrameWidth > 800) {
    body.className = "large";
  }
}

h1.addEventListener("click", handleThisClick);
window.addEventListener("resize", windowSizer);

rain.addEventListener("click", handleThisClick);
