var todos = [];
var todoTitleEl = document.getElementById("todoTitle");
var todoDescriptionEl = document.getElementById("todoDescription");
var formEl = document.getElementById("todoForm");
var todoListEl = document.getElementById("todoList");
//fn expression
var addTodo = function (e) {
    e.preventDefault();
    var newTodo = {
        title: todoTitleEl.value,
        description: todoDescriptionEl.value,
        isCompleted: false,
    };
    todos.push(newTodo);
    // console.log(todos);
    var todoItemEl = document.createElement("li");
    todoItemEl.innerHTML = "<h3>".concat(newTodo.title, "</h3><p>").concat(newTodo.description, "</p>\n  <button id=\"removeBtn\">Remove</button>\n  <input id=\"radioComplete\" type=\"radio\" name=\"completion-").concat(newTodo.title, "\">Complete\n  <input id=\"radioUncomplete\" type=\"radio\" name=\"completion-").concat(newTodo.title, "\">unComplete\n  ");
    todoListEl.appendChild(todoItemEl);
    var removeBtnEl = todoItemEl.querySelector("#removeBtn");
    removeBtnEl.addEventListener("click", function () {
        todoListEl.removeChild(todoItemEl);
        var index = todos.indexOf(newTodo);
        if (index > -1) {
            todos.splice(index, 1);
        }
    });
    var radioCompleteEl = todoItemEl.querySelector("#radioComplete");
    var radioUncompleteEl = todoItemEl.querySelector("#radioUncomplete");
    radioCompleteEl.addEventListener("change", function () {
        newTodo.isCompleted = true; // to trigger change detection
        console.log(todos);
    });
    radioUncompleteEl.addEventListener("change", function () {
        newTodo.isCompleted = false; // to trigger change detection
        console.log(todos);
    });
    formEl.reset();
};
formEl.addEventListener("submit", addTodo);
