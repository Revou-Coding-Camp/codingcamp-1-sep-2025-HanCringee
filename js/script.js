const form = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const dateInput = document.getElementById("date-input");
const todoList = document.getElementById("todo-list");
const filterInput = document.getElementById("filter-input");


form.addEventListener("submit", function(e) {
  e.preventDefault();

  if (todoInput.value.trim() === "" || dateInput.value === "") {
    alert("Isi semua form!");
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `
    <span>${todoInput.value} - <small>${dateInput.value}</small></span>
    <button class="delete-btn">Hapus</button>
  `;

  todoList.appendChild(li);


  todoInput.value = "";
  dateInput.value = "";
});

// Hapus To-Do
todoList.addEventListener("click", function(e) {
  if (e.target.classList.contains("delete-btn")) {
    e.target.parentElement.remove();
  }
});


filterInput.addEventListener("keyup", function(e) {
  const text = e.target.value.toLowerCase();
  document.querySelectorAll("#todo-list li").forEach(function(item) {
    const content = item.textContent.toLowerCase();
    if (content.indexOf(text) !== -1) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
});