const input = document.querySelector("#input-to-do-list");
const btn = document.querySelector("#btn-submit");
const list = document.querySelector("#nav");

btn.addEventListener("click", () => {
  const li = document.createElement("li");
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "delete";
  li.innerHTML = input.value;
  list.appendChild(li);
  li.appendChild(deleteBtn);
});
