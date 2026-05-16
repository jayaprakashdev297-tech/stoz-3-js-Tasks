const form = document.getElementById("task-form");
const clrBtn = document.getElementById("btn-clear");
const inputValue = document.getElementById("task");
const ul = document.querySelector(".collection");
const filterInput = document.getElementById("search");
let items = document.querySelectorAll(".collection-item");

// console.log(collections)

//remove list

// delBtns.forEach((del) => {
//   del.addEventListener("click", () => {
//     del.parentElement.remove();
//   });
// });
// removeall function

// form.addEventListener("submit", (e) => {});

function loadEventListeners() {
  form.addEventListener("submit", addTasks);
  clrBtn.addEventListener("click", removeLists);
  ul.addEventListener("click", removeTask);
  filterInput.addEventListener("input", filterItems);
}

function addTasks(e) {
  e.preventDefault();
  if (inputValue.value.trim() === "") {
    alert("enter Please");
  } else {
    let li = document.createElement("li");
    let a = document.createElement("a");
    let icon = `<i class="fa fa-remove"></i>`;
    a.setAttribute("href", "#");
    a.classList = "delete-item secondary-content";
    li.classList = "collection-item";
    a.innerHTML = icon;
    li.textContent = inputValue.value;
    li.appendChild(a);
    ul.appendChild(li);
    setLocalInTask(inputValue.value);
    inputValue.value = "";
  }
}

function setLocalInTask(value) {
  let tasks;
  // =  localStorage.getItem('task')
  // console.log(tasks);
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {

    tasks = JSON.parse(localStorage.getItem('tasks'))
    console.log(tasks)
  }

  tasks.push(value);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  console.log(tasks)
}



function removeLists() {
  ul.innerHTML = "";
}
function removeTask(e) {
  e.preventDefault();

  if (e.target.parentElement.classList.contains("delete-item")) {
    e.target.parentElement.parentElement.remove();
  }
}

function filterItems(e) {
  let value = e.target.value;
  // let items = document.querySelectorAll(".collection-item");
  items.forEach((item) => {
    let val = item.textContent.toLowerCase();
    if (val.includes(value)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });

  // console.log(ul.children)
  // console.log(e.target.value);
}

loadEventListeners();
