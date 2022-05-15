// only querySelector requires # or . for id/class to select an element
// const loginForm = document.getElementById("login-form");
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
// can search inside of element or just do like this^^
//to trigger the validation of an input on html specifically, it must be inside of a form!!!!!!!!!!!!!!!!!!!!!!!

function onLoginSubmit() {
  const username = loginInput.value;
  console.log(username.value);

  loginForm.addEventListener("submit", onLoginSubmit);

  //   console.log(loginInput.value);
  //   console.log("please write your name");
  //   if (username === "") {
  //     alert("please write your name");
  // }
}
// SO when putting this stuff on the html, the browser will help us!!!!!! as long as it is inside of a form.

// if you press enter/button on form, and there is no more inputs, the form will be submitted and the  whole website gets refreshed!
// why does the value show up for a moment then disappears? we need to stop the default behaviour of refreshing when the form is submitted.
