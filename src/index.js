document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("#create-task-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    createToDoItem(e.target.new_task_description.value);
    form.reset();
  })
});

function createToDoItem(todoItem) {
  let item = document.createElement("li");
  let bttn = document.createElement("button");
  bttn.addEventListener("click", deleteToDo);
  bttn.textContent = "X";
  item.textContent = `${todoItem} `;
  item.appendChild(bttn);
  // const opt = document.querySelector("option");
  // if (opt.textContent === "High Priority") {
  //   item.style.color = "red";
  // } else if (opt.textContent === "Medium Priority") {
  //   item.style.color = "yellow";
  // } else if (opt.textContent === "Low Priority") {
  //   item.style.color = "green";
  // } 
  document.querySelector("#tasks").appendChild(item);
}

function deleteToDo(e) {
  e.target.parentNode.remove();
}