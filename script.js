const input = document.querySelector("#input-to-do-list");
const btn = document.querySelector("#btn-submit");
const list = document.querySelector("#nav");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function updateLocalStorage() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = "todo-list-item";
    li.innerText = task;

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.innerText = "delete";

    deleteBtn.addEventListener("click", () => {
      li.classList.add("fade-out");

      setTimeout(() => {
        tasks.splice(index, 1);
        updateLocalStorage();
        renderTasks();
      }, 300);
    });

    li.appendChild(deleteBtn);
    list.appendChild(li);
  });
}

btn.addEventListener("click", () => {
  const taskText = input.value.trim();

  if (taskText === "") return;

  tasks.push(taskText);
  updateLocalStorage();
  renderTasks();
  input.value = "";
});

renderTasks();
