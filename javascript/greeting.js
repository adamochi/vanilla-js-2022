// ONLY QUERYSELECTOR requires '#' or '.' for id/class to select an element
// const loginForm = document.getElementById("login-form");
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const greeting = document.querySelector("#greeting");
// can search inside of element or just do like this^^
//to trigger the validation of an input on html specifically, it must be inside of a form!!!!!!!!!!!!!!!!!!!!!!!
const link = document.querySelector("a");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  console.log(username);
  paintGreetings(username);
}

function paintGreetings(username) {
  // greeting.innerText = "Hello " + username;
  greeting.innerText = `Hello, ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  loginInput.classList.add(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  //show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // show the greeting
  paintGreetings(savedUsername);
  loginInput.classList.add(HIDDEN_CLASSNAME);
}

/*
function handleLinkClick(event) {
  event.preventDefault();
  console.log(link.href);
  console.log(event);
}
link.addEventListener("click", handleLinkClick);
*/

//   console.log(loginInput.value);
//   console.log("please write your name");
//   if (username === "") {
//     alert("please write your name");
// }
// SO when putting this stuff on the html, the browser will help us!!!!!! as long as it is inside of a form.

// if you press enter/button on form, and there is no more inputs, the form will be submitted and the  whole website gets refreshed!
// why does the value show up for a moment then disappears? we need to stop the default behaviour of refreshing when the form is submitted.

// handleLinkClick({information about the event that just happened})
