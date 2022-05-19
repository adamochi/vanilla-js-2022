const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = document.querySelector("#todo-form input");

const TODOS_KEY = "todos";

// IMPORTANT TO MAKE THIS A LET SO IT CAN BE UPDATED WITHOUT DELETING THE OLD TODOS
let toDos = [];

// have to save the array as a string so that we can get it back and turn it into an array using JSON.stringify() and JSON.parse()
// JSON.parse(localStorage.getItem("todos"));

function saveToDos() {
  localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteToDo(event) {
  //    console.log("you clicked delete");
  //    console.log(event);
  //    console.dir(event.target.parentElement); // parentNode: li / parentElement: li
  const li = event.target.parentElement;
  console.log(typeof li.id);
  li.remove();
  //HOW TO REMOVE AN ITEM FROM AN ARRAY. BY CREATING AN ARRAY WITHOUT THE ITEM WE WANT TO DELETE.
  /* [1, 2, 3, 4].filter(sexyFilter)
  sexyFilter(1) = 1
  sexyFilter(2) = 2
  sexyFilter(3) = 3
  sexyFilter(4) = 4 
  function sexyFilter(){return false}
undefined
[1, 2, 3, 4, 5, 6].filter(sexyFilter)
[]length: 0[[Prototype]]: Array(0)*/
  // WE WANT TO RETURN TRUE IF THE ITEM ON THE ARRAY SHOULD STAY
  // sexyFilter(item) {return item !== 3}
  // [1, 2, 3, 4, 5, 6].filter(sexyFilter)
  // const arr = [1, 2, 3, 4];
  //  arr.filter(item => item > 2)
  // const newArr = arr.filter(item => item > 2)
  // arr will be same, newArr is just created (2) [3, 4]
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  // because li.id was a string and toDo.id is a number, you need to use parseInt to make the string become a number like to toDo.id
  saveToDos();
}
//we know that a button was clicked but we don't know which one.

// we want to create an li with a span so we can also add a delete button
function paintToDo(newTodo) {
  //   console.log("i will paint new todo");
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  const button = document.createElement("button");
  span.innerText = newTodo.text;
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  // console.log(li);
  // console.log(span);
  toDoList.appendChild(li);
}
//

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObject = {
    text: newToDo,
    id: Date.now(),
  };
  toDos.push(newTodoObject);
  paintToDo(newTodoObject);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// BETTER WAY TO WRITE EXACTLY THE SAME AS BELOW, the function is part of the if! just by using an arrow => function

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}

//   console.log(parsedToDos);
//   toDos = parsedToDos;

//parsedToDos.forEach((item) => console.log("this is the turn of", item));

/*

const savedToDos = localStorage.getItem(TODOS_KEY);

// want to perform a function for each item on an array ---- javascript allows you to! called .forEach
array.forEach(element => {    
});

function sayHello(item) {
  console.log("this is the turn of", item);
}

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  console.log(parsedToDos); // shows as an array thanks to JSON.parse()
  parsedToDos.forEach(sayHello); // runs sayHello for every item on the array
}
*/
/*
* const arr = ["pixxa", "banana", "tomato"]
* 
* function sexyFilter(food){return food !== "banana"}
* 
* arr.filter(sexyFilter)
* (2) ['pixxa', 'tomato']

const arr = [1234, 654231, 234, 33, 94994, 234]

function sexyFunction(potato) { return potato <= 1000 }

arr.filter(sexyFunction)
(3) [234, 33, 234]


*/
