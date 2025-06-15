const input = document.querySelector("#input-to-do-list");
const btn = document.querySelector("#btn-submit");
const list = document.querySelector("#nav");

btn.addEventListener("click", () => {
  const taskText = input.value.trim();

  if (taskText === "") return;

  const li = document.createElement("li");
  li.className = "todo-list-item";
  li.innerText = taskText;

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.innerText = "delete";

  li.appendChild(deleteBtn);
  list.appendChild(li);

  input.value = "";

  deleteBtn.addEventListener("click", () => {
    list.removeChild(li);
  });
});
