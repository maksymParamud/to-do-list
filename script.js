const input = document.querySelector("#input-to-do-list");
const btn = document.querySelector("#btn-submit");
const list = document.querySelector("#nav");

btn.addEventListener("click", () => {
  const li = document.createElement("li");
  li.className = "todo-list-item";
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.innerText = "delete";
  li.innerHTML = input.value;
  list.appendChild(li);
  li.appendChild(deleteBtn);
});
