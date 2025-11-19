interface Todo {
  title: string;
  description: string;
  isCompleted: boolean;
}

const todos: Todo[] = [];

const todoTitleEl = document.getElementById("todoTitle") as HTMLInputElement;
const todoDescriptionEl = document.getElementById(
  "todoDescription"
) as HTMLInputElement;
const formEl = document.getElementById("todoForm") as HTMLFormElement;

const todoListEl = document.getElementById("todoList") as HTMLUListElement;

//fn expression
const addTodo = (e: Event): void => {
  e.preventDefault();
  let newTodo: Todo = {
    title: todoTitleEl.value,
    description: todoDescriptionEl.value,
    isCompleted: false,
  };
  todos.push(newTodo);

  const todoItemEl = document.createElement("li") as HTMLLIElement;
  todoItemEl.innerHTML = `<h2>${newTodo.title}</h2><p>${newTodo.description}</p>
  <button id="removeBtn">Remove</button>
  <input id="radioComplete" type="radio" name="completion-${newTodo.title}">Complete
  <input id="radioUncomplete" type="radio" name="completion-${newTodo.title}">unComplete
  `;

  const todoTitleHeadingEl = todoItemEl.querySelector(
    "h2"
  ) as HTMLHeadingElement;
  const todoDescriptionParaEl = todoItemEl.querySelector(
    "p"
  ) as HTMLParagraphElement;

  todoListEl.appendChild(todoItemEl);

  const removeBtnEl = todoItemEl.querySelector(
    "#removeBtn"
  ) as HTMLButtonElement;

  removeBtnEl.addEventListener("click", () => {
    todoListEl.removeChild(todoItemEl);
    const index = todos.indexOf(newTodo);
    if (index > -1) {
      todos.splice(index, 1);
    }
  });

  const radioCompleteEl = todoItemEl.querySelector(
    "#radioComplete"
  ) as HTMLInputElement;

  const radioUncompleteEl = todoItemEl.querySelector(
    "#radioUncomplete"
  ) as HTMLInputElement;

  radioCompleteEl.addEventListener("change", () => {
    newTodo.isCompleted = true;
    todoTitleHeadingEl.style.textDecoration = "line-through";
    todoDescriptionParaEl.style.textDecoration = "line-through";
  });

  radioUncompleteEl.addEventListener("change", () => {
    newTodo.isCompleted = false;
    todoTitleHeadingEl.style.textDecoration = "none";
    todoDescriptionParaEl.style.textDecoration = "none";
  });

  formEl.reset();
};

formEl.addEventListener("submit", addTodo);
