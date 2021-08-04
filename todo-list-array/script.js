let array = [];
const from = document.querySelector("#submitForm");
let input = document.querySelector("#input");
const todo = document.querySelector("#ulTodo");
let doneTodoList = document.querySelector(".done-todo-list");
let id = 0;

// Add Todo
from.addEventListener("submit", (e) => {
  e.preventDefault();
  let valueInput = input.value;
  let html = `  <li id="${id}">
  <span class="text-li">${valueInput}</span>
  <div class=button-todo>
    <button class="done-todo" onclick="doneTodo(${id})">✔</button>
    <button class="delete-todo" onclick="deleteTodo(${id})">✘</button>
  </div>
</li>`;

  // Jika Inputan Kosong Akan Menampilkan Alert
  if (valueInput === "") {
    alert("Tolong masukan input");
    return;
  }

  todo.innerHTML += html;
  array.push(valueInput);
  console.log(array);
  input.value = "";
  id++;
});

// Delet Todo
function deleteTodo(id) {
  let newLi = document.getElementById(id);
  newLi.style.display = "none";
  array.splice(id, 1, null);
  console.log("id", id);
  console.log(array);
}

// Done Todo
function doneTodo(id) {
  console.log(id);
  // cari tahu get element class name[0]
  let newLi = document.getElementById(id).getElementsByClassName("text-li")[0];
  newLi.style.opacity = 0.4;

  let htmlDone = ` <li class="li-done" id="${id}">
  <span class="text-li">${array[id]}</span>
</li>`;

  doneTodoList.innerHTML += htmlDone;
}
