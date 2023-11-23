"use strict";
const todoForm = document.getElementById("todo-form");
const newTodo = document.getElementById("new-todo");
const list = document.getElementById("list");
let todo = [];
function addTodo(text) {
    const newTodo = {
        id: todo.length + 1,
        text,
    };
    todo.push(newTodo);
    renderTodo();
}
function renderTodo() {
    list.innerHTML = '';
    todo.forEach(todo => {
        const li = document.createElement('li');
        li.textContent = todo.text;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => deletetodo(todo.id));
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', () => edittodo(todo.id, todo.text));
        li.appendChild(deleteButton);
        li.appendChild(editButton);
        list.appendChild(li);
    });
}
function edittodo(id, s) {
    deletetodo(id);
    newTodo.value = s;
}
function deletetodo(id) {
    todo = todo.filter(todo => todo.id !== id);
    renderTodo();
}
todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const newTodoText = newTodo.value.trim();
    if (newTodoText !== ' ' && newTodoText !== null) {
        addTodo(newTodoText);
        newTodo.value = "";
    }
});
