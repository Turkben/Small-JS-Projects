const form = document.querySelector(".add");
const ulList = document.querySelector(".todos");
const search = document.querySelector(".search input");

const generateTemplate = (todo) => {
  const html = `<li class="list-group-item d-flex justify-content-between align-items-center"><span>${todo}</span> <i class="far fa-trash-alt delete"></i></li>`;

  ulList.innerHTML += html;
};

//add todos
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = form.add.value.trim();
  if (todo.length > 0) {
    generateTemplate(todo);
    form.reset();
  }
});

//delete todos
ulList.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

//filter
const filterTodos = (text) => {
  Array.from(ulList.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(text))
    .forEach((todo) => todo.classList.add("filtered"));

  Array.from(ulList.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(text))
    .forEach((todo) => todo.classList.remove("filtered"));
};

search.addEventListener("keyup", () => {
  const text = search.value.trim().toLowerCase();
  filterTodos(text);
});
