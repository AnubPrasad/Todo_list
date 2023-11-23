type Todo = {
    id: number;
    text: string;
};

const todoForm = document.getElementById("todo-form") as HTMLFormElement;
const newTodo = document.getElementById("new-todo") as HTMLInputElement;
const list = document.getElementById("list") as HTMLUListElement;

let todo:Todo[] = [];


function addTodo(text:string){
    const newTodo: Todo ={
        id:todo.length+1,
        text,
    };
    todo.push(newTodo);
    renderTodo();
}

function renderTodo(){
    list.innerHTML='';
    todo.forEach(todo =>{
        const li=document.createElement('li');
        li.textContent=todo.text;

        const deleteButton = document.createElement('button');
        deleteButton.textContent='Delete';
        deleteButton.addEventListener('click', ()=> deletetodo(todo.id));

        const editButton = document.createElement('button');
        editButton.textContent='Edit';
        editButton.addEventListener('click', ()=>edittodo(todo.id,todo.text));

        li.appendChild(deleteButton);
        li.appendChild(editButton);
        list.appendChild(li);
    })
}

function edittodo(id:number,s:string){
    deletetodo(id);
    newTodo.value=s;
}
function deletetodo(id:number){
    todo = todo.filter(todo =>todo.id!== id);
    renderTodo();
}
todoForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const newTodoText = newTodo.value.trim();

    if(newTodoText !== ' ' && newTodoText !== null){
        addTodo(newTodoText);
        newTodo.value="";
    }
});